import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  sidenav:boolean;

  constructor() {

    this.sidenav = false;

  }

  open(){

    this.sidenav = true;

  };

  close(event:boolean){

    this.sidenav = event;

  };

}
