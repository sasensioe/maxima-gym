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

  public newUserForm = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    role: ['', Validators.required],
    address: this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', Validators.required],
    }),
    contact: this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    }),
    access: this.formBuilder.group({
      password: ['', Validators.required],
    })
  })

  constructor( private formBuilder: FormBuilder,
               private usersService: UsersService,
               private popUpService: PopUpService ) { }

  newUser(){

    if(this.newUserForm.valid){
      this.usersService.newUser(this.newUserForm.value).toPromise()
      .then(
        resp => {
          this.popUpService.openPopUp(resp);
        }
      ).catch(
        error => {
          this.popUpService.openPopUp(error.error)
        }
      )
    }

    if(this.newUserForm.invalid){
      this.popUpService.openPopUp({ok: false, msg: 'Please, check the form'})
    }
  
  }

}
