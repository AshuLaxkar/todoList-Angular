import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit{
  todo! : Todo;
  constructor(private  todoService :TodoService , private  router : Router,private route :ActivatedRoute){}

ngOnInit() {
  const id = this.route.snapshot.params['id'];
    this.todoService.getTodoById(+id).subscribe((data) => {
      this.todo = data;
    console.log(data);
    
   });
}
}
