import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.css']
})
export class TodoNavComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('currentUser');
    this.router.navigate(["/signin"]);

  }

}
