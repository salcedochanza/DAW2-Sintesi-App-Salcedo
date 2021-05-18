import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _user: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient, private router: Router) { }

  get users(): Observable<User[]> {
    return this._user.asObservable();
  }

  getUsers(){
    let token = JSON.parse(localStorage.getItem('token'));
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}),
      observe: 'body' as 'body'
    };
    this.http.get("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/users", options).subscribe(
      (response: any) => {
        if (!response.status){
          localStorage.clear();
          this.router.navigate(['/login']);
        }
        response.users.forEach(
          (user: any) => {
            let users: User = new User();
            users.userId = user.id;
            users.username = user.username;
            users.email = user.email;
            users.firstName = user.first_name;
            users.lastName = user.last_name;
            users.phone = user.phone;

            this.users.pipe(take(1)).subscribe(
              (originalUser: User[]) => {
                this._user.next(originalUser.concat(users));
              }
            );
        });
        localStorage.setItem('token', JSON.stringify(response.token));
      }
    );
  }

  deleteUser(id: String){
    let token = JSON.parse(localStorage.getItem('token'));
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}),
      observe: 'body' as 'body'
    };
    this.http.delete("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/users?id="+id, options).subscribe(
      (response:any) => {
        console.log(response);
      }
    );
  }
}
