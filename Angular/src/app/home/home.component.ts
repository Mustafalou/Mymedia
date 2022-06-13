import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any={username:"",id:0}
  friends:any=[]
  posts:any=[]
  constructor(private http:HttpClient,private router: Router) { 
    if(!localStorage.getItem("id")) this.router.navigateByUrl('')
    else{
      this.http.get("http://localhost:8000/users/" + localStorage.getItem("id"))
      .subscribe(data => {
        this.user = data;
      })
      this.http.get("http://localhost:8000/friends/" + localStorage.getItem("id"))
      .subscribe(data => {
        this.friends = data;
      })
    }
  }
  ngOnInit(): void {}
  LogOut(){
    localStorage.removeItem('id')
    this.router.navigateByUrl("")
  }
  getBack(){
    this.router.navigateByUrl("home")
  }
  addFriend(f:NgForm):void{
    this.http.post("http://localhost:8000/friends/"+this.user.id,{
      username:f.value.friend_user
    })
    .subscribe(data=>{
      console.log(data)
    })
    console.log(f.value.friend_user)
  }

}
