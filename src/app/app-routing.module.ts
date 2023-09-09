import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-list/todo-details/todo-details.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';
import { TodoRegistrationComponent } from './todo-registration/todo-registration.component';
import { TodoWeclomeComponent } from './todo-weclome/todo-weclome.component';
import { TodoLogoutComponent } from './todo-logout/todo-logout.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'add', component: TodoFormComponent },
  { path: 'edit/:id', component: TodoFormComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }, // Redirect to /todos by default
  {path: 'details/:id' , component : TodoDetailsComponent},
  {path: 'login' ,component : TodoLoginComponent},
  {path : 'registration', component: TodoRegistrationComponent},
  {path: 'home' , component: TodoWeclomeComponent },
  {path:'logout',component:TodoLogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
