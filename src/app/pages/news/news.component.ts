import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {

  news = [
    {title: 'The most famous diet', img: 'assets/img/activities/pilates.jpg'},
    {title: 'The most powerful man', img: 'assets/img/activities/spinning.jpg'},
    {title: 'We have no limits', img: 'assets/img/activities/trx.jpg'},
  ]

  ngOnInit(): void {

    window.scrollTo(0,0)

  }

}
