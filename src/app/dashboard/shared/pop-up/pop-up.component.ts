import { Component } from '@angular/core';

import { PopUpService } from 'src/app/services/dashboard-services/pop-up.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  public message = {};

  constructor( public popUpService: PopUpService ) {}

  accept(){
    this.popUpService.closePopUp();
    if(this.popUpService.message['ok']){
      history.go(-1);
    }else{
      return;
    }
  }

  
}
