import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-logout',
  templateUrl: './todo-logout.component.html',
  styleUrls: ['./todo-logout.component.css']
})
export class TodoLogoutComponent implements OnInit{
constructor(private todoService :TodoService){}

ngOnInit(): void {
  this.todoService.logout();
}
}
