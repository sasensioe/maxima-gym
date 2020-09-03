import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http : HttpClient ) {

  }

  getArticles = async(from: number, category: string, limit: number, date: any) => {
    
    return this.http.get(`${base_url}/articles/getArticles/${category}/${date}?from=${from}&limit=${limit}`).toPromise();

  }

  getArticle = async(articleId: number) => {

    return this.http.get(`${base_url}/articles/getArticle/${articleId}`).toPromise();

  }

  getRelated( title: string, category: string ){

    return this.http.get(`${base_url}/articles/getRelated/${title}/${category}`).toPromise()

  }

}