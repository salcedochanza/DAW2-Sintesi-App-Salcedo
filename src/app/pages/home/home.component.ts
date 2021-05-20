import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public convidat: boolean = true;
  public logged: boolean;
  public rol: string;
  private _categories: Category[];
  public catFilter: Category[];

  constructor(private router: Router, private categoriesService: CategoriesService) {
    this.checkUserLogged();
    this.categoriesService.getParents(0);

    this.categoriesService.categories.subscribe(
      (originalCategory: Category[]) => {
        this._categories = originalCategory;
        this.filterByCategory('0');
      }
    );
  }

  ngOnInit(): void {
  }

  filterByCategory(categoryId){
    this.catFilter = this.categories.filter(category => category.parentId == categoryId)
  }

  get categories(): Category[] {
    return this._categories;
  }

  checkUserLogged(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null){
      this.logged = true;
      this.convidat = false;

      this.rol = user.rol;
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToPerfil(){
    this.router.navigate(['/perfil']);
  }

}
