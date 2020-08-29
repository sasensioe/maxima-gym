import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from '../services/dashboard-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements CanActivate {

  constructor( private authService: AuthService,
               private router: Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

    const role = this.authService.loggedUser.role;

    if( role === 'editor' ){
      return true;
    }else if( role === 'admin'){
      return true;
    }else{
      this.router.navigate(['dashboard', role]);
      return false;
    }
  }
  
}
