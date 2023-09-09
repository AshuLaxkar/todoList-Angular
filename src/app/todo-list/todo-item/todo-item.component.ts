import { Component,Input , Output ,EventEmitter, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() editTodo = new EventEmitter<number>();

  constructor(private todoService: TodoService,private router: Router) { }

  // markCompleted(): void {
  //   this.todo.completed = !this.todo.completed;
  //   this.todoService.updateTodo(this.todo);
  // }

  // onDeleteTodo(): void {
  //   this.deleteTodo.emit(this.todo.id);
  // }

  // onEditTodo(): void {
  //  this.router.navigateByUrl(`/edit/${this.todo.id}`)
  // }

  // onDetailsTodo(){
  //   this.router.navigateByUrl(`/details/${this.todo.id}`)
  // }
  markCompleted(): void {
    this.todo.completed = !this.todo.completed;
    this.todoService.updateTodo(this.todo.id, this.todo).subscribe(updatedTodo => {
      // You can optionally handle the updatedTodo or perform other actions
    });
  }

  onDeleteTodo(): void {
    this.deleteTodo.emit(this.todo.id);
    
  }

  onEditTodo(): void {
    this.router.navigateByUrl(`/edit/${this.todo.id}`);
  }

  onDetailsTodo(): void{
    this.router.navigateByUrl(`/details/${this.todo.id}`);
  }
}
