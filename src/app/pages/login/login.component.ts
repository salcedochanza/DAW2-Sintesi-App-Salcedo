import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: String;
  public pass: String;
  

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.Login(this.user, this.pass);
  }

}
