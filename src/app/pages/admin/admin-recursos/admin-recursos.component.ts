import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recursos } from 'src/app/models/recursos';
import { RecursosService } from 'src/app/services/recursos/recursos.service';

@Component({
  selector: 'app-admin-recursos',
  templateUrl: './admin-recursos.component.html',
  styleUrls: ['./admin-recursos.component.scss']
})
export class AdminRecursosComponent implements OnInit {

  public user;
  private _recursos: Recursos[];

  constructor(private router: Router, private recursService: RecursosService) {
    this.checkUserLogged();
    this.recursService.getRecursos();
    this.recursService.recursos.subscribe(
      (originalRecursos: Recursos[]) => {
        this._recursos = originalRecursos;
      }
    );
  }

  get recursos(): Recursos[] {
    return this._recursos;
  }

  ngOnInit(): void {
  }

  checkUserLogged(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user == null){
      this.router.navigate(['/login']);
    } else {
      this.getUserInfo();
      if (user.rol != 'admin'){
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
