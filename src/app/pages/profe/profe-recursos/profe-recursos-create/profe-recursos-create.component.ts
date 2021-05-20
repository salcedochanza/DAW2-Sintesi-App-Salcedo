import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profe-recursos-create',
  templateUrl: './profe-recursos-create.component.html',
  styleUrls: ['./profe-recursos-create.component.scss']
})
export class ProfeRecursosCreateComponent implements OnInit {

  public user;

  public selVideorecurs:number = 1;
  public selDisponibilitat:number = 1;
  
  public titol:string;
  public descripcio:string;
  public explicacio:string;
  public disponibilitat:string;
  public videorecurs;
  public categoria:string;

  constructor(private router: Router) {
    this.checkUserLogged();
  }
  
  ngOnInit(): void {
  }

  newRecurs(){
    //this.recursService.newRecurs(this.titol, this.descripcio, this.explicacio, this.disponibilitat, this.categoria);
  }

  checkUserLogged(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user == null){
      this.router.navigate(['/login']);
    } else {
      this.getUserInfo();
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
