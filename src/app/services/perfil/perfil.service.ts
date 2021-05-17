import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      let options = {
        headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}),
        observe: 'body' as 'body'
      };
      
      this.http.put("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/profile/edit", body, options).subscribe(
        (body: any) => {
          if (body.status){
            localStorage.setItem('token', JSON.stringify(body.token));
            localStorage.setItem('user', JSON.stringify(body.user));
            this.router.navigate(['/perfil']);
          } else {
            alert("El usuari o contrasenya no son correctes");
          }
        }
      );
    }
  }
  