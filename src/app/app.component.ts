import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [TodoListComponent,
    HeaderComponent,
    CommonModule,
    MatButtonModule,
     MatIconModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  
}
