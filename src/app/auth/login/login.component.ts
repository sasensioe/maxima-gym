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
      if(this._authService.validateToken){
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

    this._authService.login(this.loginForm.value)
      .then(() => {
        this._router.navigateByUrl('/dashboard');
      })
      .catch(error => {
        this.errorMsg = error.error.msg;
      })

  }

}
