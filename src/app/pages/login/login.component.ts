import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: String;
  public pass: String;
  

  constructor(private loginService: LoginService, private router: Router) {
    this.checkUserLogged();
  }

  ngOnInit(): void {
  }

  login(){
    this.loginService.Login(this.user, this.pass);
  }

  checkUserLogged(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null){
      this.router.navigate(['/home']);
    }
  }

}
