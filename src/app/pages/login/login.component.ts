import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: String="admin";
  private pass: String="password";
  

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user, this.pass);
    this.loginService.checkLogin(this.user, this.pass);
  }

}
