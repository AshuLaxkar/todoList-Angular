import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-login',
  templateUrl: './todo-login.component.html',
  styleUrls: ['./todo-login.component.css']
})
export class TodoLoginComponent {
errorMessage: string = 'Invalid Credentials';
username :string = '';
password : string='';
invalidLogin :boolean = false;

constructor(private router :Router, private todoService : TodoService){

}

onHandleLogin(){
  if(this.todoService.authenticate(this.username,this.password)){
    this.router.navigate(['/home']);    
  }else{
    this.invalidLogin = true;
  }



}
}
