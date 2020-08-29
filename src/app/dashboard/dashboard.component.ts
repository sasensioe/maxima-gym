import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/dashboard-services/auth.service';
import { User } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User;

  constructor( private authService: AuthService,
               private router: Router,
               private route: ActivatedRoute ) {
    this.user = authService.loggedUser;
  }

  ngOnInit(): void {
    this.router.navigate(['dashboard', this.user.role]);
  }

  goBack(){
    const route = this.route.snapshot['_routerState'].url;
    let array = route.split('/');

    if(route.includes('update')){
      history.back()
      return;
    }

    if(array.length === 3){
      return;
    }else{
      let tempArray = array;
      tempArray.pop();
      tempArray.shift();
      let path = tempArray.join('/')
      this.router.navigateByUrl(path)
    }

  }

  logout(){
    this.authService.logout();
  }

}
