import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  public showPopUp:boolean = false;
  public message: Object;

  private uid: number;
  public userData: User;

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
               private route: ActivatedRoute ) {

                  this.uid = this.route.snapshot.params.id;

                  this.usersService.getUserById(this.uid).then(resp => {
                    
                    this.userData = resp['dbUser'];

                    const update = this.updateUserForm.controls;
                    update.name.setValue(this.userData.name);
                    update.surname.setValue(this.userData.surname);
                    update.role.setValue(this.userData.role);
                    update.address.get('address').setValue(this.userData.address.address);
                    update.address.get('city').setValue(this.userData.address.city);
                    update.address.get('province').setValue(this.userData.address.province);
                    update.address.get('postalCode').setValue(this.userData.address.postalCode);
                    update.contact.get('email').setValue(this.userData.contact.email);
                    update.contact.get('phone').setValue(this.userData.contact.phone);
                    update.access.get('userName').setValue(this.userData.access.userName);
                    update.access.get('password').setValue(this.userData.access.password);
                    this.loading = false
                  })

               }

  updateUser(){

    if(this.updateUserForm.valid){
      this.usersService.updateUser(this.uid, this.updateUserForm.value)
                       .then(resp => {
                          console.log(resp)
                          this.message = resp
                        })
                       .catch(error => {
                          console.log(error.error);
                          this.message = error.error;
                        }
                      )
    }

    if(this.updateUserForm.invalid){
      this.message = { ok: false, msg: 'Form not valid' }
    }


  }

}
