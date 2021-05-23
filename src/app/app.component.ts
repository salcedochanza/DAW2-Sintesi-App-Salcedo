import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from './models/category';
import { CategoriesService } from './services/categories/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DWTube';
}
