import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'

import { NewsService } from '../../services/news.service'
import { PageEvent } from '@angular/material/paginator';

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

  news: any[] = [];

  newsShow: any[] = [];

  filterMenu:boolean = false;

  filterForm = new FormGroup({
    date: new FormControl('all'),
    category: new FormControl('all'),
    text: new FormControl('')
  })

  constructor( private newsService: NewsService ){

    this.newsService.getData()
      .then(docs => docs.docs.map(doc => {

        let article = doc.data();

        article.id = doc.id;

        this.news.push(article)
        this.newsShow.push(article)

      }))
      .catch(err=> console.log(err))

  }

  dates: Filter[] = [
    {value: 'all', viewValue: 'All results'},
    {value: 604800000, viewValue: 'Last 7 days'},
    {value: 2592000000, viewValue: 'Last 30 days'},
    {value: 31536000000, viewValue: 'Last 365 days'},
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


  ngOnInit(): void {

    window.scrollTo(0,0)

  }

  openFilter(){
    this.filterMenu = !this.filterMenu
  }

  filter(){

    console.log(this.news)

    let textFiltered: any[];

    let today = new Date();

    let text = this.filterForm.value['text'];
    let date = this.filterForm.value['date'];
    let categ = this.filterForm.value['category'];

    if(categ === 'all'){

      textFiltered = this.news.filter(query => query.title.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) !== -1)
    
      if(date === 'all'){

        return this.newsShow = textFiltered
      
      }else{

        let dateFilter = today.getTime()-date
        return this.newsShow = textFiltered.filter(time => time.date > dateFilter)
      
      }

    }else{

      textFiltered = this.news.filter(
        query =>   query.title.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) !== -1 &&
                   query.category.indexOf(categ) !== -1 
      )

      if(date === 'all'){

        return this.newsShow = textFiltered
      
      }else{

        let dateFilter = today.getTime()-date
        return this.newsShow = textFiltered.filter(time => time.date > dateFilter)
      
      }

    }

  }

  
  page_size: number = 6;
  page_number:number = 1


  handlePage(e: PageEvent){

    this.page_number = e.pageIndex + 1
    
  }

  

  color(category:string){
    
    switch(category){
      case 'gym':
        return '#e43f5a'
      case 'health':
        return '#162447'
      case 'fitness':
        return '#6f4a8e'
      case 'nutrition':
        return '#ffa931'
      case 'musculation':
        return '#006a71'
      case 'lifestyle':
        return '#2bb2bb'
      case 'cardio':
        return '#e79cc2'
    }

  }
  

}

