import { ChangeDetectorRef, Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../shared/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService,private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadTodos();
  }

  
  loadTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.loadTodos(); // Reload todos after deletion
      this.cdRef.detectChanges();
      this.router.navigate(['/todos']);
    });
  }
 
}
