import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecursosService } from 'src/app/services/recursos/recursos.service';

@Component({
  selector: 'app-profe-recursos-delete',
  templateUrl: './profe-recursos-delete.component.html',
  styleUrls: ['./profe-recursos-delete.component.scss']
})
export class ProfeRecursosDeleteComponent implements OnInit {

  constructor(private router: Router, private recursService: RecursosService, private activatedRoute: ActivatedRoute) {
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.recursService.deleteRecurs(id);
        } 
      }
    );
  }
  
  ngOnInit(): void {
  }

}
