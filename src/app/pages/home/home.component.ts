import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  image: string;
  link: string;
}

export interface Plan {
  name: string;
  price: string;
  data: {};
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public infoForm: boolean;
  public infoVideo: boolean;

  tiles: Tile[] = [
    {text: 'ACTIVITIES', cols: 2, rows: 1, image: 'assets/img/pages/home/sections/activities.jpg', link:'/activities' },
    {text: 'FACILITIES', cols: 1, rows: 2, image: 'assets/img/pages/home/sections/facilities.jpg', link:'/facilities'},
    {text: 'NEWS', cols: 1, rows: 1, image: 'assets/img/pages/home/sections/news.jpg', link:'/news'},
    {text: '', cols: 1, rows: 1, image: 'assets/img/pages/home/sections/members.jpg', link:'/login'},
  ];

  plans: Plan[] = [
    {name: 'GOLD', price: '19,90€/month', data: [
      'Without permanence', 'Access to all areas', 'Classes included'
    ]},
    {name: 'PLATINUM', price: '29,90€/month', data: [
      'Without permanence', 'Free swimming pool access', 'Access to all areas', 'Classes included', 'Free parking'
    ]},
    {name: 'TITANIUM', price: '39,90€/month', data: [
      'Without permanence', 'Free swimming pool access', 'Access to all areas', 'Classes included', 'Free parking', 'Personal training'
    ]}
  ]

  constructor() {
    this.infoForm = false;
  }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  openInfoForm(){
    this.infoForm = true;
  }

  closeInfoForm(event: boolean){
    this.infoForm = event;
  }

  openInfoVideo(){
    this.infoVideo = true;
  }

  closeInfoVideo(event: boolean){
    this.infoVideo = event;
  }

}
