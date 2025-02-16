import { Component, EventEmitter, Input , Output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ITodo } from '../../../models/todo.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDialog } from '@angular/material/dialog';
import { NewTodoDialogComponent } from './new-todo-dialog/new-todo-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo',
  imports: [MatCardModule,
    MatIconModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule],    
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {

  public noTodo:boolean = false;

  @Input() _todo: ITodo[];
  @Input() _index: number;

  public isCompleted(){
    this._todo[this._index].isComplete = true;
  }

  public deleteTodo() {
    if(this._todo.length == 1){
      this.noTodo=true;
    } 
    this._todo.splice(this._index, 1);   
    console.log("delete : "+this._index);
  }

  constructor(public dialog: MatDialog ) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoDialogComponent, {
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {   
      console.log('the result is: '+ result);
      this._todo.push(result);
      console.log('The dialog was closed');      
    });
  }
  
}


