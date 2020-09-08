import { Component, OnInit } from '@angular/core';
import { FacilitiesService, Facility } from 'src/app/services/pages-services/facilities.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  public facilities: Facility[];

  constructor( private _facilitiesService: FacilitiesService ) {
    this.facilities = _facilitiesService.facilities;
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }
  
  

}
