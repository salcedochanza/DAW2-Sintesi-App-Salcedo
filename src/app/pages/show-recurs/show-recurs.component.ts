import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Recursos } from 'src/app/models/recursos';
import { RecursosService } from 'src/app/services/recursos/recursos.service';

@Component({
  selector: 'app-show-recurs',
  templateUrl: './show-recurs.component.html',
  styleUrls: ['./show-recurs.component.scss']
})
export class ShowRecursComponent implements OnInit {
  @ViewChild('player') player: any;

  public convidat: boolean = true;
  public logged: boolean;
  public rol: string;

  public id: string;
  public titol: string;
  public descripcio: string;
  public explicacio: string;
  public categoria: string;
  public tipus_disponibilitat: string;
  public disponibilitat: string;
  public tipus: string;
  public canvas: string;
  public videorecurs: string
  public propietari: string;

  constructor(private router: Router, private recursService: RecursosService, private activatedRoute: ActivatedRoute) {
    this.checkUserLogged();

    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.recursService.getRecurs(id).subscribe(
            (result:any) => {
              this.id = result.recurs[0].id;
              this.titol = result.recurs[0].titol;
              this.descripcio = result.recurs[0].descripcio;
              this.explicacio = result.recurs[0].explicacio;
              this.categoria = result.recurs[0].categoria;
              this.tipus_disponibilitat = result.recurs[0].tipus_disponibilitat;
              this.disponibilitat = result.recurs[0].disponibilitat;
              this.tipus = result.recurs[0].tipus;
              this.canvas = "data:image/png;base64," + result.recurs[0].canvas;
              if (this.tipus == '1' || this.tipus == '2'){
                this.videorecurs = "http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/files/" + result.recurs[0].videorecurs;
              } else {
                this.videorecurs = result.recurs[0].videorecurs;
              }
              this.propietari = result.recurs[0].propietari;

              localStorage.setItem('token', JSON.stringify(result.token));
            }, (error: any) => {
              localStorage.setItem('token', JSON.stringify(error.error.token));
              alert(error.error.message);
            }
          );
        } 
      }
    );
  }

  ngOnInit(): void {
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
