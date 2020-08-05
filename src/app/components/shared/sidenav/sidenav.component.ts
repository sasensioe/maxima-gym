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

close(){

  this.closeSidenav.emit(false)

}


}

