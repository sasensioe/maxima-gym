import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SelectImageService {

  private _hideSelectImage: boolean = true;

  get hideModal(){
    return this._hideSelectImage;
  }

  openModal(){
    this._hideSelectImage = false;
  }

  closeModal(){
    this._hideSelectImage = true;
  }

}
