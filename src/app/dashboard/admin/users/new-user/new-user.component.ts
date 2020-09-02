import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UsersService } from 'src/app/services/dashboard-services/users.service';
import { PopUpService } from 'src/app/services/dashboard-services/pop-up.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  public newUserForm = this._formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    role: ['', Validators.required],
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
               private _usersService: UsersService,
               private _popUpService: PopUpService ) { }

  newUser(){

    if(this.newUserForm.valid){
      this._usersService.newUser(this.newUserForm.value)
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

    if(this.newUserForm.invalid){
      const error = {
        ok: false,
        msg: 'Please, check the form'
      }
      this._popUpService.openPopUp(error);
    }
  
  }

}
