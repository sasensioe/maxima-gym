import { Component, OnInit } from '@angular/core';

import { ActivitiesService, Activity, Week } from '../../services/activities.service'

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[];

  schedule: Week[];

  constructor( private activitiesService:ActivitiesService ){

    this.activities = this.activitiesService.activities;

    this.schedule = this.activitiesService.schedule;

  }

  ngOnInit(): void {

    window.scrollTo(0, 0)

  }


}
