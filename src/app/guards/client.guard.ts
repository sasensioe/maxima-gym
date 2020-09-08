import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/dashboard-services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  constructor( private _authService: AuthService,
               private _router: Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    return this._authService.validateClientToken()
      .pipe(
        tap(isAuthenticated => {
          if(!isAuthenticated){
            this._router.navigateByUrl('/login');
          }
        })
      )
  }
  
}
