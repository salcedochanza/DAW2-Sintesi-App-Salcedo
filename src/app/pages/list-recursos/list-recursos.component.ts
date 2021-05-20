import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recursos } from 'src/app/models/recursos';
import { RecursosService } from 'src/app/services/recursos/recursos.service';

@Component({
  selector: 'app-list-recursos',
  templateUrl: './list-recursos.component.html',
  styleUrls: ['./list-recursos.component.scss']
})
export class ListRecursosComponent implements OnInit {

  public convidat: boolean = true;
  public logged: boolean;
  public rol: string;
  private _recursos: Recursos[];

  constructor(private router: Router, private recursService: RecursosService, private activatedRoute: ActivatedRoute) {
    this.checkUserLogged();

    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.recursService.getRecursos(id);
          this.recursService.recursos.subscribe(
            (originalRecursos: Recursos[]) => {
              this._recursos = originalRecursos;
            }
          );
        } 
      }
    );
  }

  ngOnInit(): void {
  }

  get recursos(): Recursos[] {
    return this._recursos;
  }

  checkUserLogged(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null){
      this.logged = true;
      this.convidat = false;

      this.rol = user.rol;
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToPerfil(){
    this.router.navigate(['/perfil']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
