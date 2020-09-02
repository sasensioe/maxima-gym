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

  constructor( private http: HttpClient ) { }
  
  newUser(data: object){
    return this.http.post(`${base_url}/users/newUser`, data).toPromise();
  }

  getUsers(from: number = 0, role: string){

    return this.http.get<GetUsers>(`${base_url}/users/getUsers/${role}?from=${from}`)
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

    return this.http.get(`${base_url}/users/getUser/${uid}`)
      .pipe(
        map((resp: {ok: boolean, dbUser: User}) => resp.dbUser)
      )
      .toPromise();

  }

  updateUser(uid: string, data: object){
    return this.http.put(`${base_url}/users/updateUser/${uid}`, data).toPromise();
  }

  checkPassword(uid: string, pass: string){

    return this.http.get(`${base_url}/users/checkPassword/${uid}?pass=${pass}`).toPromise();

  }

  updatePassword(uid: string, newPass: object){

    return this.http.put(`${base_url}/users/updatePassword/${uid}`, newPass).toPromise();
    
  }

}
