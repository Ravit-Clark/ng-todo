import { Component, ViewChild ,ChangeDetectionStrategy, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepicker, MatDatepickerInput, MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ITodo } from '../../../../models/todo.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-todo-dialog',
  imports: [FormsModule, 
    MatInputModule,   
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput, 
    MatButtonModule,   
   ],
  providers:[MatNativeDateModule, 
    MatDatepickerModule,provideNativeDateAdapter(),
  ],
  templateUrl: './new-todo-dialog.component.html',
  styleUrl: './new-todo-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTodoDialogComponent {

  @ViewChild('f') form: NgForm;
  @Input() todoArray: ITodo[];
  
  
  constructor(private dialogRef: MatDialogRef<NewTodoDialogComponent>) {}

  public newTodo(): void{
    console.log("on submittttt");

    const todo:ITodo = {
      title: this.form.form.value.title,
    description: this.form.form.value.description,
    isComplete: false,
    deadline: this.form.form.value.deadline,
    isDelete: false,
    }
      this.dialogRef.close(todo); 
  
    
  }

}
