import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/dashboard-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReceptionGuard implements CanActivate {

  constructor( private authService: AuthService,
    private router: Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
      const role = this.authService.loggedUser.role;

      if( role === 'receptionist' ){
        return true;
      }else if(role === 'admin'){
        return true;
      }else{
        this.router.navigate(['dashboard', role])
        return false;
      }
  }
  
  
}
