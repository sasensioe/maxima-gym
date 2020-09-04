import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/dashboard-services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-protected',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User;

  constructor( private _authService: AuthService,
               private _router: Router,
               private _activatedRoute: ActivatedRoute ) {
                this.user = _authService.loggedUser;
             }

  ngOnInit(): void {

    if(this.user.role === 'receptionist'){
      this._router.navigate(['dashboard', 'reception']);
    }else{
      this._router.navigate(['dashboard', this.user.role]);
    }

  }

  goBack(){
    const route = this._activatedRoute.snapshot['_routerState'].url;
    let arrayRoute = route.split('/');

    if(route.includes('update')){
      history.back()
      return;
    }
    
    if(arrayRoute.length === 3){
      return;
    }else{
      let tempArrayRoute = arrayRoute;
      tempArrayRoute.pop();
      tempArrayRoute.shift();
      let path = tempArrayRoute.join('/')
      this._router.navigateByUrl(path)
    }

  }

  logout(){
    this._router.navigateByUrl('/login');
    this._authService.logout();
  }

}
