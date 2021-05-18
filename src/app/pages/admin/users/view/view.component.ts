import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public userId: String;
  public user: String;
  public firstName: String;
  public lastName: String;
  public email: String;
  public phone: String;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
