import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports:[ TodoListComponent,
            HeaderComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
