import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  private _hidePopUp: boolean = true;
  public message: object;

  get hidePopUp(){
    return this._hidePopUp;
  }

  openPopUp(data: object){
    this.message = data;
    this._hidePopUp = false;
  }

  closePopUp(){
    this._hidePopUp = true;
  }

}
