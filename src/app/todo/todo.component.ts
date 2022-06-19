import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(public router: Router) { }
  public myData:any = JSON.parse(localStorage.getItem('currentUser')!);
  public users:any = JSON.parse(localStorage.getItem('currentUser')!);
  public currentTodo: any = [];
  public todo :any;
  public todoList :any;
  public todoObj:any={};
  public classList: any={};
  public todoArray:any = [];
  public user :any = {
  todo:'',  
  todoDescription: '',
  todoDate:'',
  todoTime:'',
  time :new Date().toLocaleDateString(),
  date :new Date().toLocaleDateString(),
}


  ngOnInit(): void {
    this.todoArray = JSON.parse(localStorage.getItem('todos')!);
    this.users = JSON.parse(localStorage.getItem('userData')!);
    this.myData = JSON.parse(localStorage.getItem('currentUser')!);
    // if (this.todoArray == null) {
    //   this.todoArray = [];
    // }
    // console.log(this.todoArray);
  }
  addTodo(){
    for (let i = 0; i < this.users.length; i++) {
      const allData = this.users[i].email;
      if (allData == this.myData.email) {
         console.log(allData);
         this.users[i].userTodo = [...this.users[i].userTodo, this.user];
         console.log(this.users[i].userTodo);
         this.myData.userTodo = [...this.myData.userTodo,this.user];
         this.currentTodo = this.myData.userTodo;
      }
      localStorage.setItem('currentUser',JSON.stringify(this.myData));
      localStorage.setItem('userData',JSON.stringify(this.users));

      
    }
    this.todoObj = {user:this.user}
    this.todoArray.push(this.todoObj);
    console.log(this.todoArray);
    localStorage.setItem("todos", JSON.stringify(this.todoArray));
  }
  editTodo(){
    // console.log(index);
    this.router.navigate(["/users"]);
  }
  deleteTask(index:any){
      this.myData.splice(index, 1);
      localStorage.removeItem(`currentUser[${index}]`);

  }
 navbar(){
  document.addEventListener("DOMContentLoaded",(event:any)=> {
   
    const showNavbar = (toggleId:any, navId:any, bodyId:any, headerId:any) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    // this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });
 

 }
 
}
