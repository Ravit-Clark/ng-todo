import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ITodo } from '../../models/todo.interface';
import { TodoComponent } from './todo/todo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,
            MatCardModule,
            MatDividerModule,
            MatListModule,
            CommonModule,
            TodoComponent,
            MatIconModule,
            MatButtonModule
          ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  template: '<mat-card-title> {{todo.title}}</mat-card-title>'
})
export class TodoListComponent {


  public index:number = 0;

  public todoList : ITodo[] = [
    {
      title: "Task 1",
    description: "ioejef neklfjs khdf",
    isComplete: false,
    deadline: new Date ("2025-01-15"),
    isDelete: false
    },
    {
      title: "Task 2",
    description: "ioejef neklfjs khdf UHIUF JDHUIWHIWBUASHDUY BGDFG BJDHFUDH",
    isComplete: true,
    deadline: new Date("2025-02-17"),
    isDelete: false
    }
  ];

  onClickList(index: number){
    this.index = index;
  }  

  
 

}
