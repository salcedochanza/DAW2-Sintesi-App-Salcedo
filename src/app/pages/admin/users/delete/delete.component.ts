import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private router: Router, private userService: UsersService, private activatedRoute: ActivatedRoute) {
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.userService.deleteUser(id);
        } 
      }
    );
  }

  ngOnInit(): void {
  }

}
