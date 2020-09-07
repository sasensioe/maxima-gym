import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { InfoForm } from 'src/app/interfaces/info-form.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor( private _http: HttpClient ) { }

  newInfoRequest = async(data: InfoForm) => {
    return this._http.post(`${base_url}/info-requests`, data).toPromise()
  }

  getInfoRequests(from: number){
    return this._http.get(`${base_url}/info-requests?from=${from}`).toPromise();
  }

  getRequestById(id: string){
    return this._http.get(`${base_url}/info-requests/get-request/${id}`).toPromise();
  }

  setResponse(id: string, response: boolean){
    const data = {response: response};
    return this._http.put(`${base_url}/info-requests/set-response/${id}`, data).toPromise()
  }

  registerCall(id: string){
    const data = {date: new Date()};
    return this._http.put(`${base_url}/info-requests/register-call/${id}`, data).toPromise()
  }


}
