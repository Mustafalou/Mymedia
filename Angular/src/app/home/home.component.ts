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
  messages:any= []
  constructor(private http:HttpClient,private router: Router) { 
    if(!localStorage.getItem("id")) this.router.navigateByUrl('')
  }
  async init(){
    await this.http.get("http://localhost:8000/users/" + localStorage.getItem("id"))
    .subscribe(data => {
      this.user = data;
    })
    await this.http.get("http://localhost:8000/friends/" + localStorage.getItem("id"))
    .subscribe(data => {
      this.friends = data;
    })
    this.friends.forEach(async (friend:any) => {
      await this.http.get("http://localhost:8000/posts/" + friend.id)
      .subscribe(data => {
        console.log(friend.id)
        this.posts.push(data);
      })
    });
    await this.http.get("http://localhost:8000/posts/" + localStorage.getItem("id"))
    .subscribe(data => {
      this.posts.push(data);
    })
  }
  ngOnInit(): void {
    this.init()
    console.log(this.friends)
  }
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
  addPost(f:NgForm){
    console.log(this.friends)
    if(f.value.message != ""){
      this.http.post("http://localhost:8000/posts/"+this.user.id,f.value)
      .subscribe(data=>{
        console.log(data)
      })
      console.log(f.value)
    }
    
  }
  async showMessages(friend:any){
    var div = document.getElementById("messages")
    await this.http.get("http://localhost:8000/messages/"+this.user.id+"/"+friend.id)
    .subscribe(data=>{
      this.messages = data
      
    })
    this.messages.forEach((message:any)=>{
      var element = document.createElement("h2")
      element.appendChild(document.createTextNode(friend.username +" : "+ message.message))
      div?.appendChild(element)
      
    })
    console.log(this.messages)
  }
  sendMessage(f:NgForm){
    if (f.value.message !==""){
      this.http.post("http://localhost:8000/messages/1", f.value)
      .subscribe(data=>{
        console.log(data)
      }
        
      )
    }
  }
}
