import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

import { LoginForm } from '../../interfaces/login-form.interface';
import { User } from '../../models/user.model';
import { Client } from 'src/app/models/client.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser: User;
  public loggedClient: Client;

  constructor( private _http: HttpClient ) { }

  get token():string{
    return localStorage.getItem('token');
  }

  teamLogin(data: LoginForm){
    return this._http.post(`${base_url}/login/team`, data)
      .pipe(
        tap((resp:any) => {
          localStorage.setItem('token', resp.token)
        })
      )
      .toPromise()
  }

  membersLogin(data: LoginForm){
    return this._http.post(`${base_url}/login/members`, data)
      .pipe(
        tap((resp:any) => {
          localStorage.setItem('token', resp.token)
        })
      )
      .toPromise()
  }

  logout(){
    localStorage.removeItem('token');
    this.loggedUser = null;
    this.loggedClient = null;
  }

  validateUserToken(): Observable<boolean>{
    return this._http.get(`${base_url}/login/renewUserToken`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map((resp:any) => {
        if(resp.user){
          const {name, surname, role, img, address, contact, access, uid} = resp.user;
          this.loggedUser = new User(name, surname, role, img, address, contact, access, uid);
          this.loggedClient = null;
          localStorage.setItem('token', resp.token);
          return true;
        }else{
          return false;
        }
      }),
      catchError( err => of(false))
    )
  }

  validateClientToken(): Observable<boolean> {
    return this._http.get(`${base_url}/login/renewClientToken`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map((resp:any) => {
        if(resp.client){
          const {name, surname, plan, img, routine, address, contact, access, uid} = resp.client;
          this.loggedClient = new Client(name, surname, plan, img, routine ,address, contact, access, uid);
          this.loggedUser = null;
          localStorage.setItem('token', resp.token);
          return true;
        }else{
          return false;
        }

      }),
      catchError( err => of(false))
    )
  }

}
