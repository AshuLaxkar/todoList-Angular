import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-login',
  templateUrl: './todo-login.component.html',
  styleUrls: ['./todo-login.component.css'],
})
export class TodoLoginComponent {
  errorMessage: string = 'Invalid Credentials';
  username: string = '';
  password: string = '';
  invalidLogin: boolean = false;

  constructor(private router: Router, private todoService: TodoService) {}

  onHandleLogin() {
    // if(this.todoService.authenticate({this.username,
    //   this.password})){
    //   this.router.navigate(['/home']);
    // }else{
    //   this.invalidLogin = true;
    // }
    this.todoService.login({"email": this.username ,"password":this.password}).subscribe((data)=>{
      localStorage.setItem("token",data.jwtToken);
      console.log(data)
      this.router.navigate(['/home'])
    },(Error) => {
      this.invalidLogin = true;
    } 
    );
    this.todoService.login({"email": this.username ,"password":this.password}).subscribe({
      next:(data)=>{

      },error:(error)=>{

      },
      complete:()=>{

      }
    })
  //   this.todoService.login({"email": this.username ,"password":this.password})
  // .pipe(async(data) => {
  //   localStorage.setItem("token",data.jwtToken);
  //   console.log(data)
  //   this.router.navigate(['/home']);
  // })
  // .catch(error => {
  //   this.invalidLogin = true;
  // });
  // }
}
