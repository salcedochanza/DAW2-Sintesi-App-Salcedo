import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public convidat: boolean = true;
  public logged: boolean;

  constructor(private router: Router) {
    this.checkUserLogged();
  }

  ngOnInit(): void {
  }

  checkUserLogged(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null){
      this.logged = true;
      this.convidat = false;
    }
  }

  logout(){

    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
