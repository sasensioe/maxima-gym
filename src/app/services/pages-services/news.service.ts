import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private _http : HttpClient ) { }

  getArticles = async(from: number, category: string, limit: number, date: any) => {
    return this._http.get(`${base_url}/articles/get-articles/${category}/${date}?from=${from}&limit=${limit}`).toPromise();
  }

  getArticle = async(articleId: string) => {
    return this._http.get(`${base_url}/articles/get-article/${articleId}`).toPromise();
  }

  getRelated( title: string, category: string ){
    return this._http.get(`${base_url}/articles/get-related/${title}/${category}`).toPromise()
  }

}