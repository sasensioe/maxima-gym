import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectImageService } from 'src/app/services/dashboard-services/select-image.service';
import { AuthService } from 'src/app/services/dashboard-services/auth.service';
import { UploadsService } from 'src/app/services/dashboard-services/uploads.service';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.css']
})
export class SelectImageComponent {

  public uploadedImage: File;
  public tempImg: any = null;
  public loading: boolean = false;
  public error: boolean = false;

  constructor( private _uploadsService: UploadsService,
               public selectImageService: SelectImageService,
               public authService: AuthService ) {}


  close(){
    this.tempImg = null;
    this.uploadedImage = null;
    this.selectImageService.closeModal()
  }

  changeImage(file: File){
    this.uploadedImage = file;
    
    if(!file){
      this.tempImg = null;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.tempImg = reader.result;
    }

  }

  accept(){
    this.loading = true;

    if(!this.uploadedImage){
      return;
    }

    const uid = this.authService.loggedUser.uid;
    this._uploadsService.uploadFile(this.uploadedImage, 'users', uid)
      .then(resp => {
        this.loading = false;
        this.error = false;
        this.authService.loggedUser.img = resp;
        this.selectImageService.closeModal();
      })
      .catch(error => {
        console.log(error)
        this.error = true;
      })

  }

}
