import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/dashboard-services/auth.service';
import { map } from 'rxjs/operators';
import { __values } from 'tslib';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public showTeamLogin: boolean = true;
  public showMembersLogin: boolean = false;

  public errorMsg: string;
  public showLogin: boolean = false;

  public loginForm = this._formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor( private _formBuilder: FormBuilder,
               private _authService: AuthService,
               private _router: Router ) { }


  ngOnInit(){
    this.checkRole();
  }

  async checkRole(){
    if(localStorage.getItem('token')){
      let isClient: boolean;
      let isUser: boolean;
      await this._authService.validateClientToken().toPromise()
      .then(resp => isClient = resp);
      await this._authService.validateUserToken().toPromise()
      .then(resp => isUser = resp);

      if(isClient){
        this._router.navigateByUrl('/members');
      }else if(isUser){
        this._router.navigateByUrl('/dashboard');
      }
    }else{
      this.showLogin = true;
      return;
    }
  }

  login(){

    if(this.showTeamLogin){
      this._authService.teamLogin(this.loginForm.value)
      .then(() => {
        this._router.navigateByUrl('/dashboard');
        this._authService.validateUserToken();
      })
      .catch(error => {
        this.errorMsg = error.error.msg;
      })
    }else{
      this._authService.membersLogin(this.loginForm.value)
      .then(() => {
        this._router.navigateByUrl('/members');
        this._authService.validateClientToken
      })
      .catch(error => {
        this.errorMsg = error.error.msg;
      })
    }



  }

  changeLogin(){
    this.showMembersLogin = !this.showMembersLogin;
    this.showTeamLogin = !this.showTeamLogin;
  }

}
