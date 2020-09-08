import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'

import { NewsService } from '../../services/pages-services/news.service'
import { Article } from 'src/app/models/article.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  private _articleId: string;
  private _routeSubs: Subscription;
  public articleData: Article;
  public relatedArticles: Article[] = [];


  constructor( private _route: ActivatedRoute,
               private _router: Router,
               private _newsService: NewsService ) {
                this._articleId = this._route.snapshot.params.id;
                this._router.routeReuseStrategy.shouldReuseRoute = function () {
                  return false;
                };
                this._routeSubs = this._router.events.subscribe((event) => {
                  if (event instanceof NavigationEnd) {
                    this.getArticle();
                    this._router.navigated = false;
                  }
                });
               }

  ngOnInit(){
    window.scrollTo(0,0);
  }

  ngOnDestroy(){
    if(this._routeSubs){
      this._routeSubs.unsubscribe();
    }
  }

  getArticle(){

    this._newsService.getArticle(this._articleId)
      .then((resp:any) => {
        this.articleData = resp.article;
        this._newsService.getRelated(this.articleData.title, this.articleData.category)
          .then((resp: {ok: boolean, articles: Article[]}) => {
            this.relatedArticles = resp.articles;
          })
      })
      .catch(err => {
        console.log(err)
      })

  }
  
  goTo(id:string){
    this._router.navigateByUrl('/dummy', {skipLocationChange: true})
      .then(() => this._router.navigate(['/news/article', id]));
  }

  goBack(){
    history.back();
  }
  

}
