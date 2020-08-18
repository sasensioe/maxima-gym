import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User;

  constructor( private authService: AuthService,
               private router: Router ) {
    this.user = authService.loggedUser;
  }

  ngOnInit(): void {

    this.router.navigate(['dashboard', this.user.role])

  }

  goBack(){
    history.go(-1);
  }

  logout(){
    this.authService.logout();
  }

}
