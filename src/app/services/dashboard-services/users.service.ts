import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators';
import { GetUsers } from '../../interfaces/get-users.interface';
import { User } from '../../models/user.model';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private _http: HttpClient ) { }
  
  newUser(data: object){
    return this._http.post(`${base_url}/users/new-user`, data).toPromise();
  }

  getUsers(from: number = 0, role: string){
    return this._http.get<GetUsers>(`${base_url}/users/get-users/${role}?from=${from}`)
      .pipe(
        map(resp => {
          const users = resp.users.map(
            user => new User(user.name, user.surname, user.role, user.img, user.address, user.contact, user.access, user.uid)
          )
          return {
            total: resp.total,
            users
          }
        })
      )
      .toPromise();
  }

  getUserById(uid: string){
    return this._http.get(`${base_url}/users/get-user/${uid}`)
      .pipe(
        map((resp: {ok: boolean, dbUser: User}) => resp.dbUser)
      )
      .toPromise();
  }

  updateUser(uid: string, data: object){
    return this._http.put(`${base_url}/users/update-user/${uid}`, data).toPromise();
  }

  checkPassword(uid: string, pass: string){
    return this._http.get(`${base_url}/users/check-password/${uid}?pass=${pass}`).toPromise();
  }

  updatePassword(uid: string, newPass: object){
    return this._http.put(`${base_url}/users/update-password/${uid}`, newPass).toPromise();
  }

}
