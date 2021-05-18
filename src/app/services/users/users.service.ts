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

  private _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient, private router: Router) { }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  getUser(id: string){
    let token = JSON.parse(localStorage.getItem('token'));
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}),
      observe: 'body' as 'body'
    };
    return this.http.get("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/user?id=" + id, options);
  }

  getUsers(){
    this._users.next([]);
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
                this._users.next(originalUser.concat(users));
              }
            );
        });
        localStorage.setItem('token', JSON.stringify(response.token));
      },(error: any) => {
        localStorage.setItem('token', JSON.stringify(error.error.token));
      }
    );
  }

  edit(id: string, user: string, password: string, firstName: string, lastName: string, email: string, phone: string, token: string) {
    console.log(id);
    let body = {
      'user': user,
      'id': id,
      'password': password,
      'firstName':firstName,
      'lastName':lastName,
      'email':email,
      'phone':phone,
    };
    console.log(body);
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
    };
    
    this.http.put("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/user", body, options).subscribe(
      (body: any) => {
        localStorage.setItem('token', JSON.stringify(body.token));
        this.router.navigate(['/admin/users']);
      }, (error: any) => {
        localStorage.setItem('token', JSON.stringify(error.error.token));
        alert(error.error.message);
      }
    );
  }

  deleteUser(id: String){
    let token = JSON.parse(localStorage.getItem('token'));
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
    };
    this.http.delete("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/users/" + id, options).subscribe(
      (response:any) => {
        console.log(response);
        if (response.status){
          localStorage.setItem('token', JSON.stringify(response.token));
          this.router.navigate(['admin/users']);
        }
      }
    );
  }

  newUser(username: string, password: string, password2: string, firstName:string, lastName:string, email:string, phone:string){
    let token = JSON.parse(localStorage.getItem('token'));
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
    };
    let data = {
      'username': username,
      'password': password,
      'password2': password2,
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'phone': phone
    }
    this.http.post("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/users", data, options).subscribe(
      (response:any) => {
        console.log(response);
        if (response.status){
          localStorage.setItem('token', JSON.stringify(response.token));
          this.router.navigate(['admin/users']);
        }
      }, (error: any) => {
          localStorage.setItem('token', JSON.stringify(error.error.token));
          alert(error.error.message);
      }
    );
  }

}
