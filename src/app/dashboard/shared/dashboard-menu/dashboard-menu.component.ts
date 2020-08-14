import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

  constructor( private router: Router,
               private route: ActivatedRoute ) {}

  ngOnInit(): void {
  }

  goTo(url:string){

    this.router.navigate(['dashboard', 'admin', 'users', url]);

  }

}
