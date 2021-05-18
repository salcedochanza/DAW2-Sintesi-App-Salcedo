import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: 'app-groups-update',
  templateUrl: './groups-update.component.html',
  styleUrls: ['./groups-update.component.scss']
})
export class GroupsUpdateComponent implements OnInit {

  public id: string;
  public name: string;
  public description: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private groupService: GroupsService) {
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.groupService.getGroup(id).subscribe(
            (result:any) => {
              console.log(result);
              this.id = result.group[0].id;
              this.name = result.group[0].name;
              this.description = result.group[0].description;

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

  editGroup(){
    let token = JSON.parse(localStorage.getItem('token'));
    this.groupService.editGroup(this.id, this.name, this.description, token);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
