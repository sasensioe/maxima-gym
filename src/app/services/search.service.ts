import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private _http: HttpClient ) { }

  search(collection: 'users'|'clients', text: string, param: string){
    return this._http.get(`${base_url}/all/collection/${collection}/${text}/${param}`)
      .pipe(
        map((resp:any) => resp.data)
      )
      .toPromise();
  }

  searchArticles(text: string, category: string, days: any){
    return this._http.get(`${base_url}/all/search-articles/${text}/${category}/${days}`)
      .toPromise()
  }

}
