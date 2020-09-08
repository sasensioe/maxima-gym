import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/dashboard-services/auth.service';


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

    if(localStorage.getItem('token')){
      if(this._authService.validateClientToken){
        this._router.navigateByUrl('/members');
      }else if(this._authService.validateUserToken){
        this._router.navigateByUrl('/dashboard');
      }else{
        this.showLogin = true;
        return;
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
      })
      .catch(error => {
        this.errorMsg = error.error.msg;
      })
    }else{
      this._authService.membersLogin(this.loginForm.value)
      .then(() => {
        this._router.navigateByUrl('/members');
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
