import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UsersService } from 'src/app/services/dashboard-services/users.service';
import { PopUpService } from 'src/app/services/dashboard-services/pop-up.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  private _uid: string;
  private _passFormSubmitted: boolean = false;
  public showPassForm: boolean = false;
  public loading: boolean = true;
  public passResponse: string;
  
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

  public updatePassForm = this.formBuilder.group({
    pass1: ['', [Validators.required, Validators.minLength(8)]],
    pass2: ['', [Validators.required, Validators.minLength(8)]],
  }, {
    validators: this.validateSamePasswords('pass1', 'pass2')
  })

  constructor( private formBuilder: FormBuilder,
               private usersService: UsersService,
               private route: ActivatedRoute,
               private popUpService: PopUpService ) {
                this._uid = this.route.snapshot.params.id;
               }

  ngOnInit(){

    this.usersService.getUserById(this._uid)
      .then(user => {
        this.updateUserForm.setValue({
          name: user.name,
          surname: user.surname,
          role: user.role,
          address: {
            address: user.address.address,
            city: user.address.city,
            province: user.address.province,
            postalCode: user.address.postalCode,
          },
          contact: {
            email: user.contact.email,
            phone: user.contact.phone,
          },
          access: {
            userName: user.access.userName,
            password: user.access.password,
          }
        })
        this.loading = false;
      })
      .catch(error => console.log(error))

  }

  checkMinLength(){
    const pass1 = this.updatePassForm.get('pass1');
    const pass2 = this.updatePassForm.get('pass2');
    if((pass1.hasError('minlength') || pass2.hasError('minlength'))){
      return true;
    }else{
      return false;
    }
  }

  checkSamePasswords(){
    const pass1 = this.updatePassForm.get('pass1').value;
    const pass2 = this.updatePassForm.get('pass2').value;
    if((pass1 !== pass2) && this._passFormSubmitted){
      return true;
    }else{
      return false;
    }
  }

  validateSamePasswords( pass1Name: string, pass2Name: string ){

    return (formGroup: FormGroup) => {

      const pass1 = formGroup.get(pass1Name);
      const pass2 = formGroup.get(pass2Name);

      if(pass1.value === pass2.value){
        pass1.setErrors(null)
      }else{
        pass1.setErrors({notTheSame: true});
      }
    }

  }

  updatePassword(){

    this._passFormSubmitted = true;

    if(this.updatePassForm.valid){

      const newPass = this.updatePassForm.get('pass1').value;

      this.usersService.updatePassword(this._uid, newPass)
        .then((resp: {ok: boolean, msg: string}) => {
          if(resp.ok){
            this.passResponse = resp.msg;
          }
        })
        .catch(error => {
          console.log(error)
          this.passResponse = error.error.msg;
        })

    }else{
      return;
    }

  }

  updateUser(){

    if(this.updateUserForm.valid){
      this.usersService.updateUser(this._uid, this.updateUserForm.value)
        .then(resp => {
          this.popUpService.openPopUp(resp);
        })
        .catch(error => {
          this.popUpService.openPopUp(error.error);
        }
      )
    }

    if(this.updateUserForm.invalid){
      const error = {
        ok: false,
        msg: 'Please, check the form'
      }
      this.popUpService.openPopUp(error);
    }
  }

  openPassForm(e: Event){
    e.preventDefault();
    this.showPassForm = !this.showPassForm;
  }

}
