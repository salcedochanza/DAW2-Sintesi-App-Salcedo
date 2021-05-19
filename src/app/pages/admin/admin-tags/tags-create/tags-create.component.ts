import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagsService } from 'src/app/services/tags/tags.service';

@Component({
  selector: 'app-tags-create',
  templateUrl: './tags-create.component.html',
  styleUrls: ['./tags-create.component.scss']
})
export class TagsCreateComponent implements OnInit {

  public name:string;

  constructor(private router: Router, private tagService: TagsService) { }

  ngOnInit(): void {
  }

  newTag(){
    this.tagService.newTag(this.name);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
