import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/dashboard-services/auth.service';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

  public currentUserRole: string;
  public base_url: string;
  public menu = {};
  private _path: string;

  editorMenu = [
    {role: 'editor', path: 'newArticle', title: 'NEW ARTICLE'},
    {role: 'editor', path: 'selectArticle', title: 'UPDATE ARTICLE'},
    {role: 'editor', path: 'selectArticle', title: 'DELETE ARTICLE'},
  ]

  receptionMenu = [
    {role: 'reception', path: 'newClient', title: 'NEW CLIENT'},
    {role: 'reception', path: 'selectClient', title: 'UPDATE CLIENT'},
    {role: 'reception', path: 'selectClient', title: 'DELETE CLIENT'},
  ]

  usersMenu = [
    {role: 'users', path: 'newUser', title: 'NEW USER'},
    {role: 'users', path: 'selectUser', title: 'UPDATE USER'},
    {role: 'users', path: 'selectUser', title: 'DELETE USER'},
  ]

  constructor( private router: Router,
               private route: ActivatedRoute,
               private authService: AuthService ) {

                this.currentUserRole = authService.loggedUser.role;
                this._path = route.snapshot['_routerState'].url;
                
                this.setBaseUrl();
                
               }
  
  ngOnInit(): void {
    this.getMenu();
  }

  setBaseUrl(){
    this.currentUserRole === 'admin' ? this.base_url = '/dashboard/admin': this.base_url = '/dashboard';
  }

  getMenu(){

    switch(this.currentUserRole){
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
