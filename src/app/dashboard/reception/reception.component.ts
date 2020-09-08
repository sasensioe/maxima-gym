import { Component } from '@angular/core';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent {

  constructor() { }

  public items = [
    {link: 'requests', img: 'assets/img/dashboard/icons/info-request.svg', title: 'info requests'},
    {link: 'new-client', img: 'assets/img/dashboard/icons/plus.svg', title: 'new client'},
    {link: 'select-client', img: 'assets/img/dashboard/icons/edit.svg', title: 'update client'},
  ]

}
