import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/services/dashboard-services/auth.service';
import { UsersService } from 'src/app/services/dashboard-services/users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public showModal: boolean = false;
  public passResponse: string;
  public passFormSubmitted: boolean = false;
  public user: User = this._authService.loggedUser;

  public newPasswordForm = this._formBuilder.group({
    pass1: ['', Validators.required],
    pass2: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(8)]]
  },{
    validators: this.validateSamePasswords('pass1', 'pass2')
  })

  constructor( private _authService: AuthService,
               private _formBuilder: FormBuilder,
               private _usersService: UsersService ) { }

  checkMinLength(){
    const newPass = this.newPasswordForm.get('newPassword');
    if(newPass.hasError('minlength') && this.passFormSubmitted){
      return true;
    }else{
      return false;
    }
  }

  checkSamePasswords(){
    const pass1 = this.newPasswordForm.get('pass1').value;
    const pass2 = this.newPasswordForm.get('pass2').value;
    if((pass1 !== pass2) && this.passFormSubmitted){
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
        pass2.setErrors(null);
      }else{
        pass1.setErrors({notTheSame: true});
        pass2.setErrors({notTheSame: true});
      }
    }

  }

  updatePassword(){
    this.passFormSubmitted = true;
    if(this.newPasswordForm.invalid){
      return;
    }
    if(this.newPasswordForm.valid){

      const password = this.newPasswordForm.get('pass2').value;

      this._usersService.checkPassword(this.user.uid, password)
        .then((resp: {ok: boolean}) => {

          if(resp.ok){
            const newPass = this.newPasswordForm.get('newPassword').value;
            const data = {pass: newPass}

            this._usersService.updatePassword(this.user.uid, data)
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

        })
        .catch(error => {
          this.newPasswordForm.get('pass1').setErrors({notValid: true});
          this.newPasswordForm.get('pass2').setErrors({notValid: true});
          console.log(error.error)
        })
    }

  }

  closeModal(event: boolean){
    this.showModal = event;
  }

}
