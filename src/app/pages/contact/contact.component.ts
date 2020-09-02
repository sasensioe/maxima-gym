import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

import { InfoService } from '../../services/pages-services/info.service'
import { InfoForm } from 'src/app/interfaces/info-form.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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

  ngOnInit() {
    window.scrollTo(0, 0)
  }

}
