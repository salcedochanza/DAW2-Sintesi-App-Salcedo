import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecursosService } from 'src/app/services/recursos/recursos.service';

@Component({
  selector: 'app-recursos-delete',
  templateUrl: './recursos-delete.component.html',
  styleUrls: ['./recursos-delete.component.scss']
})
export class RecursosDeleteComponent implements OnInit {

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
