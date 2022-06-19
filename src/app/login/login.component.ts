import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users:any = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userTodo: []
  }; 
  public confPassword = "";
  public myData: any = JSON.parse(localStorage.getItem("userData")!);
  public allUsers: any= [];
  public errorMsg : string = "";
  public emailReg:any = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  constructor(public router: Router, public services: ServicesService){}

  public usersArray:any = []

  ngOnInit(): void {
    this.myData = JSON.parse(localStorage.getItem("userData")!);
  }
  signUp(){
    let regTest = this.emailReg.test(this.users.email)
    console.log(regTest, this.users.email);
    let obj = {name: "",email:"", password: "", Number:"",};
    this.services.getUsers(obj).subscribe(data => {
      // console.log(data);
      // this.usersArray= data;
    })
     
    let {firstName, lastName, email, password} = this.users
    if (firstName && lastName && email && password && this.confPassword){
      if(password != this.confPassword){
        this.errorMsg = "Password does not match";
        return
      }
        if(regTest == false){
          this.errorMsg = "please check your email for correction";
          return
        }
        this.allUsers = localStorage["userData"] ? this.myData : []
        this.allUsers.push(this.users)
        localStorage.setItem("userData", JSON.stringify(this.allUsers))
        this.errorMsg = "";
        this.users.firstName = "";
        this.users.lastName = "";
        this.users.email = "";
        this.users.password = "";
        this.confPassword = "";
        this.router.navigate(["/signin"])

    }
    else{
      this.errorMsg = "please fill up the blank spaces";
    }
  }

}
