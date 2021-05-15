import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  
  constructor(private http: HttpClient,
    private router: Router) { }

    editProfile(userId: String, user: String, firstName: String, lastName: String, email: String, phone: String, token: String) {
      let body = {
        'id': userId,
        'user': user,
        'firstName':firstName,
        'lastName':lastName,
        'email':email,
        'phone':phone,
      };
      let headers = {
        'Authorization': 'Bearer ' + token,
      }
      console.log(body);
      this.http.put("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/profile_edit", body, {headers}).subscribe(

      );
    }
  }
  