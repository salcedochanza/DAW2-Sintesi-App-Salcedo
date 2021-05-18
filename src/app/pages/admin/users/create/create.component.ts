import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public user: string;
  public password: string;
  public password2: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }

  newUser(){
    this.userService.newUser(this.user, this.password, this.password2, this.firstName, this.lastName, this.email, this.phone);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
