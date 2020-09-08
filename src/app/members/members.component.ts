import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/dashboard-services/auth.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public client: Client;
  public sidenav: boolean;

  constructor( private _authService: AuthService ) {
                this.client = _authService.loggedClient;
                this.sidenav = false;
             }

  ngOnInit(): void {
  }

  open(){
    this.sidenav = true;
    console.log(this.sidenav)
  }

  close(event:boolean){
    this.sidenav = event;
    console.log(this.sidenav)
  }

}
