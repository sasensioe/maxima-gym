import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  public showPopUp:boolean = false;
  public message: Object;

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
               private usersService: UsersService ) { }

  newUser(){

    if(this.newUserForm.valid){
      this.usersService.newUser(this.newUserForm.value).toPromise()
      .then(
        resp => {
          console.log(resp);
          this.message = resp;
        }
      ).catch(
        error => {
          console.log(error.error);
          this.message = error.error;
        }
      )
    }

    if(this.newUserForm.invalid){
      this.message = { ok: false, msg: 'Form not valid' }
    }

    this.showPopUp = true;
  
  }

  closePopUp(event:boolean){
    this.showPopUp = event;
  }

}
