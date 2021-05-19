import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TagsService } from 'src/app/services/tags/tags.service';

@Component({
  selector: 'app-tags-delete',
  templateUrl: './tags-delete.component.html',
  styleUrls: ['./tags-delete.component.scss']
})
export class TagsDeleteComponent implements OnInit {

  constructor(private router: Router, private tagService: TagsService, private activatedRoute: ActivatedRoute) {
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.tagService.deleteTag(id);
        } 
      }
    );
  }
  
  ngOnInit(): void {
  }

}
