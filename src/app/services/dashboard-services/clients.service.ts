import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GetClients } from 'src/app/interfaces/get-clients.interface';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/models/client.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private _http: HttpClient ) { }

  newClient(data: object){
    return this._http.post(`${base_url}/clients/new-client`, data).toPromise();
  }

  getClients(from: number = 0, plan: string ){
    return this._http.get<GetClients>(`${base_url}/clients/get-clients/${plan}?from=${from}`)
    .pipe(
      map(resp => {
        const clients = resp.clients.map(
          user => new Client(user.name, user.surname, user.plan, user.img, user.routine, user.address, user.contact, user.access, user.uid)
        )
        return {
          total: resp.total,
          clients
        }
      })
    )
    .toPromise();
  }

  getClientById(uid: string){
    return this._http.get(`${base_url}/clients/get-client/${uid}`)
      .pipe(
        map((resp: {ok: boolean, dbClient: Client}) => resp.dbClient)
      )
      .toPromise();
  }

  updateClient(uid: string, data: object){
    return this._http.put(`${base_url}/clients/update-client/${uid}`, data).toPromise();
  }

  checkPassword(uid: string, pass: string){
    return this._http.get(`${base_url}/clients/check-password/${uid}?pass=${pass}`).toPromise();
  }

  updatePassword(uid: string, newPass: object){
    return this._http.put(`${base_url}/clients/update-password/${uid}`, newPass).toPromise();
  }

  updateRoutine(uid: string, data){
    return this._http.put(`${base_url}/clients/update-routine/${uid}`, data).toPromise();
  }


}
