import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public user;
  public userGroups = [];

  constructor(private router: Router) {
    this.checkUserLogged();
  }

  ngOnInit(): void {
  }

  checkUserLogged(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user == null){
      this.router.navigate(['/login']);
    } else {
      this.getUserInfo();
    }
  }

  getUserInfo(){
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userGroups = JSON.parse(localStorage.getItem('userGroup'));
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  editProfile(){
    this.router.navigate(['/perfil/edit']);
  }

}
