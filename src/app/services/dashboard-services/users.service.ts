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
  
  getUsers(from: number = 0, role: string){

    return this.http.get<GetUsers>(`${base_url}/users/${role}?from=${from}`)
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
      .toPromise();

  }

  getUserById(uid: number){

    return this.http.get(`${base_url}/users/getUser/${uid}`).toPromise();

  }

  newUser(data: object){

    return this.http.post(`${base_url}/users/newUser`, data);

  }

  updateUser(uid: number, data: object){

    return this.http.put(`${base_url}/users/updateUser/${uid}`, data).toPromise();

  }


}
