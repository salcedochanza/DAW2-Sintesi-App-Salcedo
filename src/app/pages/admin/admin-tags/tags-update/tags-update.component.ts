import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TagsService } from 'src/app/services/tags/tags.service';

@Component({
  selector: 'app-tags-update',
  templateUrl: './tags-update.component.html',
  styleUrls: ['./tags-update.component.scss']
})
export class TagsUpdateComponent implements OnInit {

  public id: string;
  public name: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tagService: TagsService) {
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log(params['id']);
        if (params['id'] != null ) {
          id = params['id'];
          this.tagService.getTag(id).subscribe(
            (result:any) => {
              console.log(result);
              this.id = result.tag[0].id;
              this.name = result.tag[0].name;

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

  editTag(){
    let token = JSON.parse(localStorage.getItem('token'));
    this.tagService.editTag(this.id, this.name, token);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
