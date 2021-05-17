import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _user: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) { }

  get users(): Observable<User[]> {
    return this._user.asObservable();
  }

  getUsers(){
    this.http.get("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/users").subscribe(
      (response: any) => {
        response.forEach(
          (user: any) => {
            let users: User = new User();
            users.userId = user.id;
            users.username = user.name;
            users.email = user.email;
            users.firstName = user.firstName;
            users.lastName = user.lastName;
            users.phone = user.phone;

            this.users.pipe(take(1)).subscribe(
              (originalUser: User[]) => {
                this._user.next(originalUser.concat(users));
              }
            );
        });
      }
    );
  }
}
