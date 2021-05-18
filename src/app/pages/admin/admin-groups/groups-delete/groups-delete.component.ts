import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-groups-delete',
  templateUrl: './groups-delete.component.html',
  styleUrls: ['./groups-delete.component.scss']
})
export class GroupsDeleteComponent implements OnInit {

  constructor(private router: Router, private groupService: GroupsService, private activatedRoute: ActivatedRoute) {
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.groupService.deleteGroup(id);
        } 
      }
    );
  }
  
  ngOnInit(): void {
  }

}
