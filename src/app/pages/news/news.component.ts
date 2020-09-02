import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'

import { NewsService } from '../../services/pages-services/news.service'
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Article } from 'src/app/models/article.model';
import { SearchService } from 'src/app/services/search.service';
import { MatSelectChange } from '@angular/material/select';

interface Category {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {

  public gridArticles: Article[] = [];
  public totalArticles: number;
  public articles: Article[] = [];
  public from: number = 0;
  public index: number = 0;
  public searching: boolean = false;
  public page_number: number = 1;
  public filterMenu:boolean = false;

  filterForm = new FormGroup({
    date: new FormControl('all'),
    category: new FormControl('all'),
    text: new FormControl('')
  })

  @ViewChild('paginator') paginator: MatPaginator;

  constructor( private newsService: NewsService,
               private searchService: SearchService ){

                
  }

  dates: Category[] = [
    {value: 'all', viewValue: 'All results'},
    {value: 604800000, viewValue: 'Last 7 days'},
    {value: 2592000000, viewValue: 'Last 30 days'},
    {value: 31536000000, viewValue: 'Last 365 days'},
  ];

  categories: Category[] = [
    {value: 'all', viewValue: 'All categories'},
    {value: 'nutrition', viewValue: 'Nutrition'},
    {value: 'gym', viewValue: 'Gym'},
    {value: 'fitness', viewValue: 'Fitness'},
    {value: 'cardio', viewValue: 'Cardio'},
    {value: 'musculation', viewValue: 'Musculation'},
    {value: 'lifestyle', viewValue: 'Lifestyle'},
    {value: 'health', viewValue: 'Health'}
  ]

  get text():string{
    return this.filterForm.get('text').value;
  }

  get getCategory():string{
    return this.filterForm.get('category').value;
  }


  ngOnInit(): void {
    window.scrollTo(0,0);
    this.newsService.getArticles(0, 'all', 6)
      .then((resp:any) => {
        this.gridArticles = resp.articles;
        this.articles = resp.articles;
        this.totalArticles = resp.total;
      })
  }

  getArticles(){
    this.newsService.getArticles(this.from, this.getCategory, 6)
      .then((resp:any) => {
        this.articles = resp.articles;
        this.totalArticles = resp.total;
      })
  }

  paginate(e: PageEvent){

    if(!this.searching){
      if(e.pageIndex > e.previousPageIndex){
        this.from += 6;
        this.paginator.pageIndex + 1;
        this.getArticles();
      }else{
        this.from -= 6;
        this.paginator.pageIndex - 1;
        this.getArticles();
      }
    }else{
      this.page_number = e.pageIndex + 1;
    }

  }

  openFilter(){
    this.filterMenu = !this.filterMenu
  }

  filter(){

    if( this.text !== ''){
      this.searchService.search('articles', this.text, this.getCategory).then((resp:any) => {
        console.log(resp)
        this.paginator.firstPage();
        this.articles = resp;
        this.totalArticles = resp.length;
        this.searching = true;
      }).catch(err => console.log(err))
    }else if(this.text === ''){
      this.paginator.firstPage();
      this.from = 0;
      this.getArticles();
      this.searching = false;
    }
  }
  


}

