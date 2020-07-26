import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sidenav:boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  setSidenav(){
    this.sidenav = !this.sidenav;
  };

}
