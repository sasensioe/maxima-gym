import { Component, Output, EventEmitter } from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms'

import { InfoService } from '../../../services/pages-services/info.service'

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent {

  @Output() closeInfoForm: EventEmitter<boolean>

  public showForm: boolean;
  public showSuccess: boolean = false;
  public showError: boolean = false;
  public formSent: boolean;

  public contactData = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    message: ['', Validators.required],
  })

  constructor( private _infoService: InfoService,
               private _formBuilder: FormBuilder ){
                this.closeInfoForm = new EventEmitter();
                this.showForm = true;
               }

  sendInfo(){

    this.formSent = true;

    if(this.contactData.invalid){
      this.showForm = true;
    }else if(this.contactData.valid){
      const data = this.contactData.value;
      this._infoService.newInfoRequest(data)
        .then((resp: {ok: boolean}) => {
          if(resp.ok){
            this.showForm = false;
            this.showSuccess = true;
          }else{
            return;
          }
        })
        .catch(error => {
          console.log(error)
          this.showError = true;
        })

    }

  }

  close(){
    this.closeInfoForm.emit(false)
  }

}
