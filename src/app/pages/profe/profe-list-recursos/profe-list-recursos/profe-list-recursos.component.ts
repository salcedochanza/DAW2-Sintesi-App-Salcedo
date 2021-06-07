import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecursosService } from 'src/app/services/recursos/recursos.service';

@Component({
  selector: 'app-profe-list-recursos',
  templateUrl: './profe-list-recursos.component.html',
  styleUrls: ['./profe-list-recursos.component.scss']
})
export class ProfeListRecursosComponent implements OnInit {

  public user;
  public rol: string;

  constructor(private router: Router, private recursosService: RecursosService) {
    this.checkUserLogged();
    //this.recursosService.getRecursosByProfe(this.user.id);
  }

  ngOnInit(): void {
  }

  checkUserLogged(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user == null){
      this.router.navigate(['/login']);
    } else {
      this.getUserInfo();
      this.rol = user.rol;
      if (user.rol != 'profe'){
        this.router.navigate(['/login']);
      }
    }
  }

  getUserInfo(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
