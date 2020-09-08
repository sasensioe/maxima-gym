import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor() { }

  public items = [
    {link: 'new-user', img: 'assets/img/dashboard/icons/plus.svg', title: 'new user'},
    {link: 'select-user', img: 'assets/img/dashboard/icons/edit.svg', title: 'update user'},
  ]

}
