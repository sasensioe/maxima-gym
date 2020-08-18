import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators';
import { GetUsers } from '../interfaces/get-users.interface';
import { User } from '../models/user.model';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  get token():string{
    return localStorage.getItem('token' || '')
  }

  get headers(){
    return {headers: {'x-token': this.token}}
  }

  
  getUsers(from: number = 0){

    return this.http.get<GetUsers>(`${base_url}/users?from=${from}`, this.headers)
          .pipe(
            map(resp => {
              const users = resp.users.map(
                user => new User(user.name, user.surname, user.role, user.address, user.contact, user.access, user.uid)
              )
              
              return {
                total: resp.total,
                users
              }
            })
          )

  }

  getUserById(uid:number){

    return this.http.get(`${base_url}/users/getUser/${uid}`, this.headers).toPromise()

  }

  newUser(data:Object){

    return this.http.post(`${base_url}/users/newUser`, data, this.headers)

  }

  updateUser(uid:number, data){

    return this.http.put(`${base_url}/users/updateUser/${uid}`, data, this.headers).toPromise()

  }


}
