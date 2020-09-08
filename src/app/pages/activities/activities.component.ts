import { Component, OnInit } from '@angular/core';

import { ActivitiesService, Activity, Week } from '../../services/pages-services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  public activities: Activity[];
  public schedule: Week[];

  constructor( private _activitiesService:ActivitiesService ){
    this.activities = this._activitiesService.activities;
    this.schedule = this._activitiesService.schedule;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


}
