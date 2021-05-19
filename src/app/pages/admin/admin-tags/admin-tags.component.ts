import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags/tags.service';

@Component({
  selector: 'app-admin-tags',
  templateUrl: './admin-tags.component.html',
  styleUrls: ['./admin-tags.component.scss']
})
export class AdminTagsComponent implements OnInit {

  public user;
  private _tags: Tag[];

  constructor(private router: Router, private tagService: TagsService) {
    this.checkUserLogged();
    this.tagService.getTags();
    this.tagService.tags.subscribe(
      (originalTags: Tag[]) => {
        this._tags = originalTags;
      }
    );
  }

  get tags(): Tag[] {
    return this._tags;
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
