import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { InfoService } from '../../services/pages-services/info.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formShow:boolean;

  formSent:boolean;

  validForm:boolean;

  contactData:FormGroup;

  constructor( private infoService:InfoService ){

    this.contactData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    })

    this.formShow = true;

  }

  sendInfo(){

    if(this.contactData.status === 'INVALID'){

      this.validForm = false;
      this.formSent = true;
      this.formShow = true;
    
    }else if(this.contactData.status === 'VALID'){

      this.validForm = true;
      this.formSent = true;
      this.formShow = false;

      let name = this.contactData.value.name;
      let email = this.contactData.value.email;
      let phone = this.contactData.value.phone;
      let message = this.contactData.value.message;
      
      this.infoService.sendInfo(name, email, phone, message);

    }

  }

  ngOnInit() {

    window.scrollTo(0, 0)

  }

}
