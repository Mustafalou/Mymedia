import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mymedia';
  logged= localStorage.getItem("id") ? true: false;
  log(){
    if(this.logged){
      localStorage.removeItem("id")
      this.logged=false
      window.location.href=""
    }else{
      window.location.href="login"
    }
  }
}
