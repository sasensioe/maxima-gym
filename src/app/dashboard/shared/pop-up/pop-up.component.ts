import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnDestroy {

  @Input() message: Object;
  @Output() closePopUp: EventEmitter<boolean>

  constructor( private router: Router ) {
    this.closePopUp = new EventEmitter();
  }

  ngOnDestroy(): void {

    this.message = {};

  }

  accept(){

    if(this.message['ok']){
      this.closePopUp.emit(false);
      this.router.navigate(['dashboard', 'admin', 'users']);
    }else{
      this.closePopUp.emit(false);
    }

  }


  
}
