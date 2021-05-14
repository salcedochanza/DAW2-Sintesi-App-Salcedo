import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  checkLogin(user: String, pass: String){
    console.log(user, pass);
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response' as 'response'
    };
    this.http.post("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/login", { 'user':user , 'pass':pass}, options).subscribe(
      (response: any) => { console.log(response) }
    );
  }

}
