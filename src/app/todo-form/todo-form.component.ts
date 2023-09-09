import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  // @ViewChild('tileInput') titleInputRef :ElementRef;
  // @ViewChild('dueDateInput') dueDateInputRef :ElementRef;
  //   isEdit: boolean = false;
  //   title: string = '';
  //   dueDate: Date = new Date(0);
  //   constructor(
  //     private route: ActivatedRoute,
  //     private router: Router,
  //     private todoService: TodoService
  //   ) {}

  //   ngOnInit(): void {
  //     // const id = this.route.snapshot.paramMap.get('id');
  //     // if (id) {
  //     //   this.todo = this.todoService.getTodoById(+id) || new Todo();
  //     //   this.isEdit = true;
  //     // }
  //   }

  //   saveTodo(): void {
  // if (this.isEdit) {
  //   this.todoService.updateTodo(this.todo);
  // } else {
  //   this.todoService.addTodo(this.todo);
  // }
  //     const newTodo = new Todo(1, this.title, false, this.dueDate);
  //     // console.log(this.title);
  //     this.todoService.addTodo(newTodo);
  //     this.router.navigate(['/todos']);
  //   }
  // }
 id!: number;
  todo :Todo  = new Todo();
  isEdit: boolean = false;
  // title: string = '';
  // description :string= ''
  // dueDate: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    
    // const todos = this.todoService.getTodos();
    // const id = this.route.snapshot.params['id'];
    // let updateTodo: any = [];
    // for (let todo of todos) {
    //   console.log(todo, 'loop');

    //   if (todo.id == id) {
    //     updateTodo = todo;
    //   }
    // }
    // this.title = updateTodo.title;
    // this.dueDate = updateTodo.dueDate;
    // this.description = updateTodo.description;

    // console.log(updateTodo, 'update todo');

    // console.log(this.todoService.getTodos());

    // console.log(this.route, 'route param');

    // console.log(id);

    this.id =  this.route.snapshot.params['id'];
    this.todoService.getTodoById(this.id).subscribe((data) => {
      this.todo = data;
      console.log(data);
    })
  }

  saveTodo(): void {
    // const newTodo = {
    //   title: this.title,
    //   completed: false,
    //   dueDate: this.dueDate,
    //   description:this.description
    // };
    this.todoService.updateTodo(this.id,this.todo).subscribe( data => {
      this.todoService.getTodos();
      console.log(data);
      
    }

    )
    this.todoService.addTodo(this.todo).subscribe( data => {
      console.log(data);
    });
    this.router.navigate(['/todos']);
  }
}
