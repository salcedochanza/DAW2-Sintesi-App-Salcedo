import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Recursos } from 'src/app/models/recursos';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { RecursosService } from 'src/app/services/recursos/recursos.service';

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
  private _recursos: Recursos[];

  constructor(private router: Router, private categoriesService: CategoriesService, private recursService: RecursosService) {
    this.checkUserLogged();
    this.categoriesService.getParents(0);

    this.categoriesService.categories.subscribe(
      (originalCategory: Category[]) => {
        this._categories = originalCategory;
      }
    );

    this.recursService.getRecursos(0);
    this.recursService.recursos.subscribe(
      (originalRecursos: Recursos[]) => {
        this._recursos = originalRecursos;
      }
    );
  }

  ngOnInit(): void {
  }

  getCategories(categoryId){
    this.categoriesService.getParents(categoryId);

    this.categoriesService.categories.subscribe(
      (originalCategory: Category[]) => {
        this._categories = originalCategory;
      }
    );

    this.recursService.getRecursos(categoryId);
    this.recursService.recursos.subscribe(
      (originalRecursos: Recursos[]) => {
        this._recursos = originalRecursos;
      }
    );
  }

  get categories(): Category[] {
    return this._categories;
  }

  get recursos(): Recursos[] {
    return this._recursos;
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
