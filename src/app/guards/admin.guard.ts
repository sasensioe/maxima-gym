import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from '../services/dashboard-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor( private authService: AuthService,
               private router: Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
      if( this.authService.loggedUser.role === 'admin' ){
        return true;
      }else{
  
        const role = this.authService.loggedUser.role;
  
        this.router.navigate(['dashboard', role])
        return false;
      }
  }
  
}
