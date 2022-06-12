import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  LogOut(){
    localStorage.removeItem('id')
    this.router.navigateByUrl("")
  }
  getBack(){
    this.router.navigateByUrl("home")
  }

}
