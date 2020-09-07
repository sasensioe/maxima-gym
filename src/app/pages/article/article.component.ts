import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { NewsService } from '../../services/pages-services/news.service'
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleId: number;
  articleData: Article;
  relatedArticles: Article[] = [];

  constructor( private route: ActivatedRoute,
               private router: Router,
               private newsService: NewsService ) {
                this.articleId = this.route.snapshot.params.id;
               }

  ngOnInit(){
    window.scrollTo(0,0);
    this.getArticle();
  }

  getArticle(){

    this.newsService.getArticle(this.articleId)
      .then((resp:any) => {
        this.articleData = resp.article;

        this.newsService.getRelated(this.articleData.title, this.articleData.category)
          .then((resp: {ok: boolean, articles: Article[]}) => {
            this.relatedArticles = resp.articles;
            console.log(resp.articles)
          })

      })
      .catch(err => {
        console.log(err)
      })

  }
  
  goTo(id:string){
  
    this.router.navigateByUrl('/dummy', {skipLocationChange: true})
      .then(() => this.router.navigate(['/news/article', id]));
  
  }

  goBack(){

    history.back();

  }
  

}
