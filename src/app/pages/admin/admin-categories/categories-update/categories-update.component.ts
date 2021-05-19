import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss']
})
export class CategoriesUpdateComponent implements OnInit {

  public id: string;
  public name: string;
  public parentId: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private categoryService: CategoriesService) {
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.categoryService.getCategory(id).subscribe(
            (result:any) => {
              console.log(result);
              this.id = result.group[0].id;
              this.name = result.group[0].name;
              this.parentId = result.group[0].parent_id;

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

  editCategory(){
    let token = JSON.parse(localStorage.getItem('token'));
    this.categoryService.editCategory(this.id, this.name, this.parentId, token);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
