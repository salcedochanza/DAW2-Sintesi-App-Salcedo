import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groups } from 'src/app/models/groups';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.scss']
})
export class AdminGroupsComponent implements OnInit {

  public user;
  private _groups: Groups[];

  constructor(private router: Router, private groupService: GroupsService) {
    this.checkUserLogged();
    this.groupService.getGroups();
    this.groupService.groups.subscribe(
      (originalGroup: Groups[]) => {
        this._groups = originalGroup;
      }
    );
  }

  get groups(): Groups[] {
    return this._groups;
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
