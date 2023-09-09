import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import {HttpClientModule} from '@angular/common/http';
import { TodoDetailsComponent } from './todo-list/todo-details/todo-details.component';
import { TodoRegistrationComponent } from './todo-registration/todo-registration.component';
import { TodoLoginComponent } from './todo-login/todo-login.component';
import { TodoMenuComponent } from './todo-menu/todo-menu.component';
import { TodoLogoutComponent } from './todo-logout/todo-logout.component';
import { TodoWeclomeComponent } from './todo-weclome/todo-weclome.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    TodoDetailsComponent,
    TodoRegistrationComponent,
    TodoLoginComponent,
    TodoMenuComponent,
    TodoLogoutComponent,
    TodoWeclomeComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
