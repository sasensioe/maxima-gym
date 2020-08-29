import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

import { UsersService } from 'src/app/services/dashboard-services/users.service';

import { User } from 'src/app/models/user.model';
import { PopUpService } from 'src/app/services/dashboard-services/pop-up.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  private uid: number;
  public loading: boolean;
  
  public updateUserForm = this.formBuilder.group({
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
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  })

  constructor( private formBuilder: FormBuilder,
               private usersService: UsersService,
               private route: ActivatedRoute,
               private popUpService: PopUpService ) {

                this.uid = this.route.snapshot.params.id;

               }

  ngOnInit(){

    this.usersService.getUserById(this.uid).then(resp => {
      const userData = resp['dbUser'];
      this.updateUserForm.setValue({
        name: userData.name,
        surname: userData.surname,
        role: userData.role,
        address: {
          address: userData.address.address,
          city: userData.address.city,
          province: userData.address.province,
          postalCode: userData.address.postalCode,
        },
        contact: {
          email: userData.contact.email,
          phone: userData.contact.phone,
        },
        access: {
          userName: userData.access.userName,
          password: userData.access.password,
        }
      })
      this.loading = false
    })

  }

  updateUser(){

    if(this.updateUserForm.valid){
      this.usersService.updateUser(this.uid, this.updateUserForm.value)
        .then(resp => {
          this.popUpService.openPopUp(resp)
        })
        .catch(error => {
          this.popUpService.openPopUp(error)
        }
      )
    }

    if(this.updateUserForm.invalid){
      this.popUpService.openPopUp({ok: false, msg: 'Please, check the form'})
    }
  }

}
