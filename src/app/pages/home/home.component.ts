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

  tiles: Tile[] = [
    {text: 'ACTIVITIES', cols: 2, rows: 1, image: 'assets/img/sections/activities.jpg', link:'/activities' },
    {text: 'FACILITIES', cols: 1, rows: 2, image: 'assets/img/sections/facilities.jpg', link:'/facilities'},
    {text: 'NEWS', cols: 1, rows: 1, image: 'assets/img/sections/trainers.jpeg', link:'/news'},
    {text: 'PRICES', cols: 1, rows: 1, image: 'assets/img/sections/nutrition.jpg', link:'/activities'},
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

  constructor() { }



  ngOnInit(): void {

    window.scrollTo(0,0)

  }

}
