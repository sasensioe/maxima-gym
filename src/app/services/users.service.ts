import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-token': localStorage.getItem('token') });

  options = { headers: this.headers };


  newUser(data:Object){

    return this.http.post(`${base_url}/users/newUser`, data, {headers: this.headers})

  }

  getUserById(uid:number){

    return this.http.get(`${base_url}/users/updateUser/${uid}`).toPromise()

  }

  updateUser(uid:number, data){

    return this.http.put(`${base_url}/users/updateUser/${uid}`, data, {headers: this.headers}).toPromise()

  }


}
