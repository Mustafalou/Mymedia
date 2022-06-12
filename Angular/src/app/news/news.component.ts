import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem("id")
  }
  LogIn(){
    this.router.navigateByUrl('login')
  }
  getBack(){
    this.router.navigateByUrl("")
  }
}
