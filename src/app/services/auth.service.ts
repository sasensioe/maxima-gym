import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators'

import { LoginForm } from '../interfaces/login-form.interface';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,
               private router: Router ) { }

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

    const token = localStorage.getItem('token');

    return this.http.get(`${base_url}/login/renewToken`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp:any) => localStorage.setItem('token', resp.token)),
      map(resp => true),
      catchError( err => of(false))
    )

  }

}
