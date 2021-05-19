import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecursosService } from 'src/app/services/recursos/recursos.service';

@Component({
  selector: 'app-recursos-update',
  templateUrl: './recursos-update.component.html',
  styleUrls: ['./recursos-update.component.scss']
})
export class RecursosUpdateComponent implements OnInit {

  public id: string;
  public titol: string;
  public descripcio: string;
  public disponibilitat: string;
  public categoria: string;
  public explicacio: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private recursService: RecursosService) {
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.recursService.getRecurs(id).subscribe(
            (result:any) => {
              console.log(result);
              this.id = result.recurs[0].id;
              this.titol = result.recurs[0].titol;
              this.descripcio = result.recurs[0].descripcio;
              this.disponibilitat = result.recurs[0].disponibilitat;
              this.categoria = result.recurs[0].categoria;
              this.explicacio = result.recurs[0].explicacio;

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

  editRecurs(){
    let token = JSON.parse(localStorage.getItem('token'));
    this.recursService.editRecurs(this.id, this.titol, this.descripcio, this.disponibilitat, this.categoria, this.explicacio, token);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }


}
