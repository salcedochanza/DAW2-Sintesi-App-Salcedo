import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: 'app-groups-create',
  templateUrl: './groups-create.component.html',
  styleUrls: ['./groups-create.component.scss']
})
export class GroupsCreateComponent implements OnInit {

  public name:string;
  public description: string;

  constructor(private router: Router, private groupService: GroupsService) { }

  ngOnInit(): void {
  }

  newGroup(){
    this.groupService.newGroup(this.name, this.description);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
