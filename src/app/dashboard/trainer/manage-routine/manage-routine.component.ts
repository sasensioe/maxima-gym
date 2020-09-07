import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/dashboard-services/clients.service';
import { Client } from 'src/app/models/client.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PopUpService } from 'src/app/services/dashboard-services/pop-up.service';

@Component({
  selector: 'app-manage-routine',
  templateUrl: './manage-routine.component.html',
  styleUrls: ['./manage-routine.component.css']
})
export class ManageRoutineComponent implements OnInit {

  public uid: string;
  public currentClient: Client;

  public manageRoutineForm = this._formBuilder.group({
    day1: [''],
    day2: [''],
    day3: [''],
    day4: [''],
    day5: [''],
    day6: [''],
    day7: [''],
  })


  constructor( private _clientsService: ClientsService,
               private _route: ActivatedRoute,
               private _formBuilder: FormBuilder,
               private _popUpService: PopUpService ) {
                 this.uid = _route.snapshot.params.id;
               }

  ngOnInit(): void {

    this._clientsService.getClientById(this.uid)
      .then(client => {
        this.currentClient = client;
        if(this.currentClient.routine.length > 0){
          this.manageRoutineForm.setValue({
            day1: client.routine[0],
            day2: client.routine[1],
            day3: client.routine[2],
            day4: client.routine[3],
            day5: client.routine[4],
            day6: client.routine[5],
            day7: client.routine[6],
          })
        }
      })

  }

  updateRoutine(){

    const data = Object.values(this.manageRoutineForm.value);

    this._clientsService.updateRoutine(this.currentClient.uid, data)
      .then(resp => {
        this._popUpService.openPopUp(resp);
      })
      .catch(error => this._popUpService.openPopUp(error.error))

  }

}
