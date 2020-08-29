import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(!localStorage.getItem('token')){
      return next.handle(req);
    }else{
      const headers = new HttpHeaders({
        'x-token': localStorage.getItem('token' || '')
      })
  
      const reqClone = req.clone({
        headers
      })
  
      return next.handle(reqClone)
    }
    


  }

}
