import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecursosService } from 'src/app/services/recursos/recursos.service';

@Component({
  selector: 'app-recursos-create',
  templateUrl: './recursos-create.component.html',
  styleUrls: ['./recursos-create.component.scss']
})
export class RecursosCreateComponent implements OnInit {

  public name:string;
  public descripcio:string;
  public explicacio:string;
  public disponibilitat:string;
  public categoria:string;

  constructor(private router: Router, private recursService: RecursosService) { }

  ngOnInit(): void {
  }

  newRecurs(){
    this.recursService.newRecurs(this.name, this.descripcio, this.explicacio, this.disponibilitat, this.categoria);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
