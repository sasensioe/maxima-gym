import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms'

import { InfoService } from '../../../services/info.service'

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {

  @Output() closeInfoForm: EventEmitter<boolean>

  showForm:boolean;

  formSent:boolean;

  validForm:boolean;

  contactData:FormGroup  

  constructor( private infoService:InfoService ){

    this.contactData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    })

    this.closeInfoForm = new EventEmitter();

    this.showForm = true;

  }

  sendInfo(){

    if(this.contactData.status === 'INVALID'){

      this.validForm = false;
      this.formSent = true
      this.showForm = true
    
    }else if(this.contactData.status === 'VALID'){

      this.validForm = true;
      this.formSent = true;
      this.showForm = false;

      let name = this.contactData.value.name;
      let email = this.contactData.value.email;
      let phone = this.contactData.value.phone;
      let message = this.contactData.value.message;
      
      this.infoService.sendInfo(name, email, phone, message);

    }

  }

  close(){

    this.closeInfoForm.emit(false)

  }

  ngOnInit(){

  }

}
