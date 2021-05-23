import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Recursos } from 'src/app/models/recursos';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private _recurs: BehaviorSubject<Recursos[]> = new BehaviorSubject<Recursos[]>([]);

  constructor(private http: HttpClient, private router: Router) { }

  get recursos(): Observable<Recursos[]> {
    return this._recurs.asObservable();
  }

  getRecurs(id: string){
    let token = JSON.parse(localStorage.getItem('token'));
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}),
      observe: 'body' as 'body'
    };
    return this.http.get("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/recurs?id=" + id, options);
  }

  getRecursos(id=null){
    this._recurs.next([]);
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    if (id == null){
      this.http.get("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/recursos", options).subscribe(
        (response: any) => {
          response.forEach(
            (recurs:any) => {
              let recursos: Recursos = new Recursos();
              recursos.id = recurs.id;
              recursos.titol = recurs.titol;
              recursos.descripcio = recurs.descripcio;
              recursos.disponibilitat = recurs.disponibilitat;
              recursos.explicacio = recurs.explicacio;
              recursos.categoria = recurs.categoria;
              
              this.recursos.pipe(take(1)).subscribe(
                (originalCategory: Recursos[]) => {
                  this._recurs.next(originalCategory.concat(recursos));
                }
              );
          });
        }
      );
    } else {
      this.http.get("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/recursosCat?id=" + id, options).subscribe(
        (response: any) => {
          response.recurs.forEach(
            (recurs:any) => {
              let recursos: Recursos = new Recursos();
              recursos.id = recurs.id;
              recursos.titol = recurs.titol;
              recursos.descripcio = recurs.descripcio;
              recursos.disponibilitat = recurs.disponibilitat;
              recursos.explicacio = recurs.explicacio;
              recursos.categoria = recurs.categoria;
              
              this.recursos.pipe(take(1)).subscribe(
                (originalCategory: Recursos[]) => {
                  this._recurs.next(originalCategory.concat(recursos));
                }
              );
          });
        }
      );
    }
  }

  newRecurs(titol: string, descripcio: string, disponibilitat: string, explicacio: string, categoria: string, file){
    let token = JSON.parse(localStorage.getItem('token'));
    console.log(file.get('titol').value);

    var formData: any = new FormData();
    formData.append("file", file.get('file').value);
    formData.append("titol", file.get('titol').value);
    formData.append("descripcio", descripcio);
    formData.append("explicacio", explicacio);
    formData.append("disponibilitat", disponibilitat);
    formData.append("categoria", categoria);
    console.log(formData);
    console.log(file.get('file').value);
    console.log(file);

    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token})
    };
    // let data = {
    //   'titol': titol,
    //   'descripcio': descripcio,
    //   'explicacio': explicacio,
    //   'disponibilitat': disponibilitat,
    //   'categoria': categoria,
    //   'file': file,
    // }
    // console.log(data);
    
    this.http.post("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/recursos", formData, options).subscribe(
      (response:any) => {
        console.log(response);
        if (response.status){
          localStorage.setItem('token', JSON.stringify(response.token));
          this.router.navigate(['admin/recursos']);
        }
      }, (error: any) => {
          console.log(error);
          localStorage.setItem('token', JSON.stringify(error.error.token));
          alert(error.error.message);
      }
    );
  }

  deleteRecurs(id: string){
    let token = JSON.parse(localStorage.getItem('token'));
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
    };
    this.http.delete("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/recursos/" + id, options).subscribe(
      (response:any) => {
        if (response.status){
          localStorage.setItem('token', JSON.stringify(response.token));
          this.router.navigate(['admin/recursos']);
        }
      }
    );
  }

  editRecurs(id: string, titol: string, descripcio: string, disponibilitat: string, explicacio: string, categoria: string, token: string) {
    let body = {
      'id': id,
      'titol': titol,
      'descripcio': descripcio,
      'disponibilitat': disponibilitat,
      'explicacio': explicacio,
      'categoria': categoria,
    }
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
    };
    
    this.http.put("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/recursos", body, options).subscribe(
      (body: any) => {
        localStorage.setItem('token', JSON.stringify(body.token));
        this.router.navigate(['/admin/recursos']);
      }, (error: any) => {
        console.log(error);
        localStorage.setItem('token', JSON.stringify(error.error.token));
        alert(error.error.message);
      }
    );
  }
}
