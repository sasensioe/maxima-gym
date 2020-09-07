import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/models/article.model';
import { GetArticles } from 'src/app/interfaces/get-articles.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor( private _http: HttpClient ) { }

  newArticle = async(data: Article) => {
    data.img = 'no-image';
    return this._http.post(`${base_url}/articles/new-article`, data).toPromise();
  }

  getArticles(from: number = 0, category: string, date: any){
    return this._http.get<GetArticles>(`${base_url}/articles/get-articles/${category}/${date}?from=${from}`)
      .pipe(
        map(resp => {
          const articles = resp.articles.map(
            article => new Article(article.id, article.title, article.date, article.description, article.img, article.category, article.body)
          )
          return {
            total: resp.total,
            articles
          }
        })
      ).toPromise();
  }

  getArticleById(id: string){
    return this._http.get(`${base_url}/articles/get-article/${id}`)
      .pipe(
        map((resp: {ok:boolean, article: Article}) => {
          return resp.article;
        })
      )
      .toPromise();
  }

  updateArticle(id: string, data: Object){
    delete data['img'];
    return this._http.put(`${base_url}/articles/update-article/${id}`, data).toPromise();
  }


}
