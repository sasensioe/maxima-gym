import { Component } from '@angular/core';
import { PopUpService } from 'src/app/services/dashboard-services/pop-up.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/services/dashboard-services/clients.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {

  public newClientForm = this._formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    plan: ['', Validators.required],
    address: this._formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', Validators.required],
    }),
    contact: this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    }),
    access: this._formBuilder.group({
      password: ['', Validators.required],
    })
  })

  constructor( private _formBuilder: FormBuilder,
               private _clientsService: ClientsService,
               private _popUpService: PopUpService ) { }

  newClient(){

    if(this.newClientForm.valid){
      this._clientsService.newClient(this.newClientForm.value)
        .then(
          resp => {
            this._popUpService.openPopUp(resp);
          }
        ).catch(
          error => {
            this._popUpService.openPopUp(error.error)
          }
        )
    }

    if(this.newClientForm.invalid){
      const error = {
        ok: false,
        msg: 'Please, check the form'
      }
      this._popUpService.openPopUp(error);
    }
  
  }

}
