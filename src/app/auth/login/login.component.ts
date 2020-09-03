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

  public loginForm = this._formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor( private _formBuilder: FormBuilder,
               private _authService: AuthService,
               private _router: Router ) { }

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
