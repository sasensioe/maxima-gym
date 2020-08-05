import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnDestroy, OnInit {

  articleId:Params;

  articleData: Object = {};

  relatedArticles:any[] = [];

  constructor( private route: ActivatedRoute,
               private router: Router,
               private newsService: NewsService ) {

    this.route.params.subscribe(routeId => this.articleId = routeId.id).unsubscribe()
    
    this.newsService.getArticle(this.articleId).then(

      data => data.subscribe(article => {

        this.articleData = article.data()

        this.newsService.getRelated(article.data().category).then(
          articles => articles.docs.forEach(article => {

            let relatedArticle = article.data();

            relatedArticle.id = article.id;

            this.relatedArticles.push(relatedArticle);

          })
        )

      })

    )

}

ngOnInit(){

  window.scrollTo(0,0)

}

ngOnDestroy(){

  

}

goTo(id:string){

  this.router.navigateByUrl('/dummy', {skipLocationChange: true}).then(() => 
    this.router.navigate(['/news/article', id])
  );

}



}
