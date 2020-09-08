import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { NewsService } from '../../services/pages-services/news.service'
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Article } from 'src/app/models/article.model';
import { SearchService } from 'src/app/services/search.service';
import { MatSelectChange } from '@angular/material/select';

interface Filter {
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
  public filterMenu: boolean = false;

  public filterForm = this._formBuilder.group({
    date: ['all'],
    category: ['all'],
    text: ['']
  })

  @ViewChild('paginator') paginator: MatPaginator;

  constructor( private newsService: NewsService,
               private searchService: SearchService,
               private _formBuilder: FormBuilder ){

                
  }

  dates: Filter[] = [
    {value: 'all', viewValue: 'All results'},
    {value: 7, viewValue: 'Last 7 days'},
    {value: 30, viewValue: 'Last 30 days'},
    {value: 365, viewValue: 'Last 365 days'},
  ];

  categories: Filter[] = [
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

  get date(){
    return this.filterForm.get('date').value;
  }

  get category():string{
    return this.filterForm.get('category').value;
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.newsService.getArticles(0, 'all', 6, 'all')
      .then((resp:any) => {
        this.gridArticles = resp.articles;
        this.articles = resp.articles;
        this.totalArticles = resp.total;
      })
  }

  getArticles(){
    this.newsService.getArticles(this.from, this.category, 6, this.date)
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
    this.filterMenu = !this.filterMenu;
  }

  filter(){

    if( this.text !== ''){
      this.searchService.searchArticles(this.text, this.category, this.date).then((resp:any) => {
        this.paginator.firstPage();
        this.articles = resp.articles;
        this.totalArticles = resp.articles.length;
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

