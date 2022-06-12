import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = {username:"",password:""}
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  Login(f:NgForm){
    this.http.post('http://localhost:8000/user/', f.value)
      .subscribe(((res:any)=>{
        localStorage.setItem("id",res.id)
        this.router.navigateByUrl("home")
      }),
      err=>{
        console.log(err)
      }
    )
  }
  Signup(f:NgForm):void{
    this.http.post('http://localhost:8000/users/', f.value)
      .subscribe(((res:any)=>{
        localStorage.setItem("id",res.id)
        this.router.navigateByUrl("home")
      }),
      err=>{
        console.log(err)
      }
    )
  }
  getBack(){
    this.router.navigateByUrl("")
  }
}
