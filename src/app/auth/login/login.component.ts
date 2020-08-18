import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public errorMsg:string;

  public loginForm = this.formBuilder.group({
    email: ['sergio@gmail.com', Validators.required],
    password: ['123456', Validators.required]
  })

  constructor( private formBuilder: FormBuilder,
               private authService: AuthService,
               private router: Router ) { }

  login(){
    
    this.authService.login(this.loginForm.value)
        .subscribe(resp => {

          this.router.navigateByUrl('/dashboard');

        }, err => {
          this.errorMsg = err.error.msg;
        })

  }

}
