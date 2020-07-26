import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from 'src/app/services/facilities.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  facilities = [];

  constructor( private facilitiesService: FacilitiesService ) {
    this.facilities = facilitiesService.facilities;
  }

  ngOnInit(): void {

    window.scrollTo(0,0)

  }
  
  

}
