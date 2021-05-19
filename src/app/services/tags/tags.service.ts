import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Groups } from 'src/app/models/groups';
import { Tag } from 'src/app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private _tag: BehaviorSubject<Tag[]> = new BehaviorSubject<Tag[]>([]);

  constructor(private http: HttpClient, private router: Router) { }

  get tags(): Observable<Tag[]> {
    return this._tag.asObservable();
  }

  getTag(id: string){
    let token = JSON.parse(localStorage.getItem('token'));
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}),
      observe: 'body' as 'body'
    };
    return this.http.get("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/tag?id=" + id, options);
  }

  getTags(){
    this._tag.next([]);
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.get("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/tags", options).subscribe(
      (response: any) => {
        response.forEach(
          (tag:any) => {
            let tags: Tag = new Tag();
            tags.id = tag.id;
            tags.name = tag.name;
            
            this.tags.pipe(take(1)).subscribe(
              (originalCategory: Tag[]) => {
                this._tag.next(originalCategory.concat(tags));
              }
            );
        });
      }
    );
  }

  newTag(name: string){
    let token = JSON.parse(localStorage.getItem('token'));
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
    };
    let data = {
      'name': name,
    }
    this.http.post("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/tags", data, options).subscribe(
      (response:any) => {
        console.log(response);
        if (response.status){
          localStorage.setItem('token', JSON.stringify(response.token));
          this.router.navigate(['admin/tags']);
        }
      }, (error: any) => {
          console.log(error);
          localStorage.setItem('token', JSON.stringify(error.error.token));
          alert(error.error.message);
      }
    );
  }

  deleteTag(id: string){
    let token = JSON.parse(localStorage.getItem('token'));
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
    };
    this.http.delete("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/tags/" + id, options).subscribe(
      (response:any) => {
        if (response.status){
          localStorage.setItem('token', JSON.stringify(response.token));
          this.router.navigate(['admin/tags']);
        }
      }
    );
  }

  editTag(id: string, name: string, token: string) {
    let body = {
      'id': id,
      'name': name,
    };
    let options = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
    };
    
    this.http.put("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/tags", body, options).subscribe(
      (body: any) => {
        localStorage.setItem('token', JSON.stringify(body.token));
        this.router.navigate(['/admin/tags']);
      }, (error: any) => {
        console.log(error);
        localStorage.setItem('token', JSON.stringify(error.error.token));
        alert(error.error.message);
      }
    );
  }
}
