import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  public items = [
    {link: 'users', img: 'assets/img/dashboard/icons/user.svg', title: 'manage users'},
    {link: 'reception', img: 'assets/img/dashboard/icons/reception.svg', title: 'manage reception'},
    {link: 'editor', img: 'assets/img/dashboard/icons/news.svg', title: 'manage news'},
  ]

  constructor() { }

  

}
