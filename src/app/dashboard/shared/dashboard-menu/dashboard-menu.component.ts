import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/dashboard-services/auth.service';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

  private _path: string;
  private _currentUserRole: string;
  public base_url: string;
  public menu = {};

  editorMenu = [
    {role: 'editor', path: 'new-article', title: 'new article'},
    {role: 'editor', path: 'select-article', title: 'update article'},
    {role: 'editor', path: 'select-article', title: 'delete article'},
  ]

  receptionMenu = [
    {role: 'reception', path: 'requests', title: 'info requests'},
    {role: 'reception', path: 'new-client', title: 'new client'},
    {role: 'reception', path: 'select-client', title: 'update client'},
  ]

  usersMenu = [
    {role: 'users', path: 'new-user', title: 'new user'},
    {role: 'users', path: 'select-user', title: 'update user'},
    {role: 'users', path: 'select-user', title: 'delete user'},
  ]

  constructor( private _router: Router,
               private _activatedRoute: ActivatedRoute,
               private _authService: AuthService ) {

                this._currentUserRole = _authService.loggedUser.role;
                this._path = _activatedRoute.snapshot['_routerState'].url;
                this.setBaseUrl();
                
               }
  
  ngOnInit(): void {
    this.getMenu();
  }

  setBaseUrl(){
    this._currentUserRole === 'admin' ? this.base_url = '/dashboard/admin': this.base_url = '/dashboard';
  }

  getMenu(){

    switch(this._currentUserRole){
      case 'editor':
        this.menu = this.editorMenu;
      case 'receptionist':
        this.menu = this.receptionMenu;
      case 'admin':
        if(this._path.includes('editor')){
          this.menu = this.editorMenu;
        }else if(this._path.includes('reception')){
          this.menu = this.receptionMenu;
        }else if(this._path.includes('user')){
          this.menu = this.usersMenu;
        }
    }
    


  }

}
