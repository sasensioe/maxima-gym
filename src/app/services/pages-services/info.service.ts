import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment'
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

}
