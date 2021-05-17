import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(parent: number){
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/categories?parent=" + parent, options);
    // .subscribe(
    //   (response: any) => {
    //     console.log(response);

    //     response.forEach(
    //       (category:any) => {
    //         this.http.get("http://localhost/DAW/M7_PHP/DAW2-Sintesi-Api-Salcedo/categories?parent=" + category.id).subscribe(
    //           (response:any) => {
    //             console.log(response);
    //             console.log(response.length);
    //             if (response.length > 0){
    //               //this.getCategories(response.id);
    //             }
    //           }
    //         );
    //       }
    //     );

    //   }
    // );
  }
}
