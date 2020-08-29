import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators'

import { LoginForm } from '../../interfaces/login-form.interface';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model'


const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser: User;

  constructor( private http: HttpClient,
               private router: Router ) { }

  get token():string{
    return localStorage.getItem('token')
  }

  login(data: LoginForm){

    return this.http.post(`${base_url}/login`, data)
        .pipe(
          tap((resp:any) => localStorage.setItem('token', resp.token))
        )

  }

  logout(){

    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');

  }

  validateToken():Observable<boolean>{

    return this.http.get(`${base_url}/login/renewToken`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map((resp:any) => {

        const {name, surname, role, address, contact, access, uid} = resp.user;
        this.loggedUser = new User(name, surname, role, address, contact, access, uid);

        localStorage.setItem('token', resp.token);

        return true
      }),
      catchError( err => of(false))
    )

  }

}
