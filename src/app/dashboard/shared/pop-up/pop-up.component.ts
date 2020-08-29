import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpService } from 'src/app/services/dashboard-services/pop-up.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnDestroy {

  public message = {};

  constructor( private router: Router,
               public popUpService: PopUpService ) {}

  ngOnDestroy(): void {

  }

  accept(){
    this.popUpService.closePopUp();
    if(this.popUpService.message['ok']){
      history.go(-1);
    }else{
      return;
    }
  }

  
}
