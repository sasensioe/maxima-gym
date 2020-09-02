import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  constructor( private http: HttpClient ) { }


  
  async uploadFile(file: File, collection: string, id: string ){

    try {
      
      const url = `${base_url}/images/${collection}/${id}`;
      const formData = new FormData();
      formData.append('image', file);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {'x-token': localStorage.getItem('token') || ''},
        body: formData
      })

      const data = await resp.json();

      if(data.ok){
        return data.url;
      }else{
        console.log(data.msg)
        return false;
      }


    } catch (error) {
      console.log(error)
      return false;
    }

    

  }

}
