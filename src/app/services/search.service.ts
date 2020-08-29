import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private http: HttpClient ) { }


  search(collection: 'users'|'articles'|'clients', text: string, param:string){

    return this.http.get(`${base_url}/all/collection/${collection}/${text}/${param}`)
      .pipe(
        map((resp:any) => resp.data)
      )
      .toPromise();

  }



}
