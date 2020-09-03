import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

@Input() sidenav:boolean;

@Output() closeSidenav: EventEmitter<boolean>;

constructor(){

  this.closeSidenav = new EventEmitter();

}

items = [
  {title: 'home', path: '/home'},
  {title: 'activities', path: '/activities'},
  {title: 'facilities', path: '/facilities'},
  {title: 'news', path: '/news'},
  {title: 'contact', path: '/contact'},
  {title: 'members', path: '/login'},
]

close(){

  this.closeSidenav.emit(false)

}


}

