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

      const userRole =  this.authService.loggedUser.role;
    
      if( userRole === 'admin' ){
        return true;
      }else{  
        this.router.navigate(['dashboard', userRole])
        return false;
      }
  }
  
}
