import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public userId: string;
  public password: string;
  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UsersService) {
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.userService.getUser(id).subscribe(
            (result:any) => {
              console.log(result);
              this.userId = result.user.id;
              this.username = result.user.username;
              this.firstName = result.user.first_name;
              this.lastName = result.user.last_name;
              this.email = result.user.email;
              this.phone = result.user.phone;

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

  edit(){
    let token = JSON.parse(localStorage.getItem('token'));
    this.userService.edit(this.userId, this.username, this.password, this.firstName, this.lastName, this.email, this.phone, token);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
