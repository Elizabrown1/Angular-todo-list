import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userstodo',
  templateUrl: './userstodo.component.html',
  styleUrls: ['./userstodo.component.css']
})
export class UserstodoComponent implements OnInit {



  constructor(public router: Router) { }
  public myData:any = JSON.parse(localStorage.getItem('currentUser')!);
  public users:any = JSON.parse(localStorage.getItem('currentUser')!);
  public currentTodo: any = [];
  public todo :any;
  public todoList :any;
  public todoObj:any={};
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
 
 


}
