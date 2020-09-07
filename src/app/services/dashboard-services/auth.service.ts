import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

import { LoginForm } from '../../interfaces/login-form.interface';
import { User } from '../../models/user.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser: User;

  constructor( private _http: HttpClient ) { }

  get token():string{
    return localStorage.getItem('token');
  }

  login(data: LoginForm){
    return this._http.post(`${base_url}/login`, data)
      .pipe(
        tap((resp:any) => localStorage.setItem('token', resp.token))
      )
      .toPromise()
  }

  logout(){

    localStorage.removeItem('token');
    this.loggedUser = null;

  }

  validateToken(): Observable<boolean> {
    return this._http.get(`${base_url}/login/renewToken`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map((resp:any) => {
        const {name, surname, role, img, address, contact, access, uid} = resp.user;
        this.loggedUser = new User(name, surname, role, img, address, contact, access, uid);
        localStorage.setItem('token', resp.token);
        return true
      }),
      catchError( err => of(false))
    )
  }

}
