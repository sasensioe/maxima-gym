import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ArticlesService } from 'src/app/services/dashboard-services/articles.service';
import { Article } from 'src/app/models/article.model';

interface Category {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-select-article',
  templateUrl: './select-article.component.html',
  styleUrls: ['./select-article.component.css']
})
export class SelectArticleComponent implements OnInit {

  public totalArticles: number;
  public articles: Article[] = [];
  public from: number = 0;
  public index: number = 0;
  public searching: boolean = false;
  public page_number: number = 1;
  
  public filterForm = new FormGroup({
    category: new FormControl('all'),
    text: new FormControl('')
  });

  public categories: Category[] = [
    {value: 'all', viewValue: 'All categories'},
    {value: 'nutrition', viewValue: 'Nutrition'},
    {value: 'gym', viewValue: 'Gym'},
    {value: 'fitness', viewValue: 'Fitness'},
    {value: 'cardio', viewValue: 'Cardio'},
    {value: 'musculation', viewValue: 'Musculation'},
    {value: 'lifestyle', viewValue: 'Lifestyle'},
    {value: 'health', viewValue: 'Health'}
  ]

  @ViewChild('paginator') paginator: MatPaginator;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private articlesService: ArticlesService,
               private searchService: SearchService) { }

  get text():string{
    return this.filterForm.get('text').value;
  }

  get getCategory():string{
    return this.filterForm.get('category').value;
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.articlesService.getArticles(this.from, this.getCategory).then(({total, articles}) => {
      this.articles = articles;
      this.totalArticles = total;
    })
  }

  handlePage(e: PageEvent){

    if(!this.searching){
      if(e.pageIndex > e.previousPageIndex){
        this.from += 5;
        this.paginator.pageIndex + 1;
        this.getArticles();
      }else{
        this.from -= 5;
        this.paginator.pageIndex - 1;
        this.getArticles();
      }
    }else{
      this.page_number = e.pageIndex + 1;
    }

  }

  goTo(id: string){
    this.router.navigate([`../updateArticle/${id}`], { relativeTo: this.route });
  }

  filter(){

    if( this.text !== ''){
      this.searchService.search('articles', this.text, this.getCategory)
        .then((resp:any) => {
          this.paginator.firstPage();
          this.articles = resp;
          this.totalArticles = resp.length;
          this.searching = true;
        })
    }else if(this.text === ''){
      this.paginator.firstPage();
      this.from = 0;
      this.getArticles();
      this.searching = false;
    }
  }

  changeCategory(e:MatSelectChange){
    this.filterForm.get('category').setValue(e.value)
    this.paginator.firstPage();
    if( this.text !== ''){
      this.filter();
    }else if(this.text === ''){
      this.getArticles();
    }

  }

}
