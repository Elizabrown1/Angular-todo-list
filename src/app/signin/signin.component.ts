import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(public router: Router) { }

  public user:any = {
    email:"",
    password: "",
  }
  public myData:any = JSON.parse(localStorage.getItem("userData")!);
  public errorMsg: string ="";
  
  

  ngOnInit(): void {
    this.myData = JSON.parse(localStorage.getItem("userData")!);
  }

  signIn(){
    let {email, password} = this.user;
    if (email && password){
      let findUser = this.myData.find((val:any)=> val.email == email && val.password == password)
      if(findUser){
        alert(`welcome ${findUser.firstName} ${findUser.lastName}`)
      }
      this.errorMsg = ""
      this.user.email = "";
      this.user.password = "";
      localStorage.setItem("currentUser",JSON.stringify(findUser))
      this.router.navigate(["/todo"]);
    }
    else{
      this.errorMsg = "incorrect email or password"
    }
  }

}
