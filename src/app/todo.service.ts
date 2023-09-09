import { Injectable } from '@angular/core';
import { Todo } from './shared/todo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // private todos :any [] = [
  //   { id: 1, title: 'Buy groceries', description : 'buy oats',completed: false, dueDate :'2023-08-25' },
  //   { id: 2, title: 'Read a book', completed: false, dueDate: '2023-08-28' },
  //   { id: 3, title: 'Go to the gym', completed: true, dueDate:'2023-08-20' },
  // ];
  
  // constructor() { }

  // getTodos(): Todo[] {
  //   return this.todos;
  // }
  // getTodoById(id: number): Todo | undefined {
  //   return this.todos.find(todo => todo.id === id);
  // }

  // addTodo(newTodo: any): void {
  //   newTodo.id = this.generateUniqueId();
  //   this.todos.push(newTodo);
  //   console.log(this.todos)
  // }

  // updateTodo(updatedTodo: Todo): void {
  //   const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
  //   if (index !== -1) {
  //     this.todos[index] = updatedTodo;
  //   }
  // }

  // deleteTodo(id: number): void {
  //   this.todos = this.todos.filter(todo => todo.id !== id);
  // }
  // private generateUniqueId(): number {
  //   const existingIds = this.todos.map(todo => todo.id);
  //   const maxId = Math.max(...existingIds);
  //   return maxId + 1;
  // }

  private apiUrl = 'http://localhost:8080/api/'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl + 'todos/add', todo);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl + 'todos');
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.apiUrl + `todos/${id}`);
  }

  updateTodo(id: number, updatedTodo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.apiUrl + `todos/${id}`, updatedTodo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + `todos/${id}`);
  }

login(data:any):Observable<any>{
  return this.http.post<any>(`http://localhost:8080/auth/login`,data);

}

//   authenticate(username: string, password : string){
//     // console.log('before ' + this.isUserLoggedIn());
    
//     if(username ==='ashu' && password === 'admin'){
//       sessionStorage.setItem('authenticaterUser',username);
//       // console.log('after ' + this.isUserLoggedIn());
//       return true;
//     }else{
//       return false;
//     }
    
//   }

//   isUserLoggedIn(){
//     let user = sessionStorage.getItem('authenticaterUser');
//     return !(user == null)
//   }

//   logout(){
//     sessionStorage.removeItem('authenticaterUser');
//   }

// exeuteTodoServiceWithPAthVariable(){
//   let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
  
//   let headers = new HttpHeaders({
//     Authorization: basicAuthHeaderString
//   })

//   return this.http.get<Todo[]>(this.apiUrl,{headers});
// }


//     createBasicAuthenticationHttpHeader(){
//       let username = 'ashu';
//       let password = 'admin';
//       let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password);
//       return basicAuthHeaderString;
//     }

}
