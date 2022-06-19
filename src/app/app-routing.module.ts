import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { TodoGuardGuard } from './guards/todo-guard.guard';
import { UserstodoComponent } from './userstodo/userstodo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'login', component:LoginComponent},
  {path: 'users', component:UsersComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'todo', children:[
    {path:"", component:TodoComponent, canActivate: [TodoGuardGuard]},
    {path:"user-todo/:i", component:UserstodoComponent}
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
