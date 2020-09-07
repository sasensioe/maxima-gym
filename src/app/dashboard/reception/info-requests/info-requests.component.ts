import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { InfoService } from 'src/app/services/info.service';

import { InfoRequest } from 'src/app/models/info-request.model'

@Component({
  selector: 'app-info-requests',
  templateUrl: './info-requests.component.html',
  styleUrls: ['./info-requests.component.css']
})
export class InfoRequestsComponent implements OnInit {

  private _from: number = 0;
  public total: number;
  public requests: InfoRequest[] = [];
  public showRequest: InfoRequest;

  @ViewChild('paginator') paginator: MatPaginator;


  constructor( private _infoService: InfoService ) { }

  ngOnInit(): void {
    this.getRequests();
  }

  showRequestById(id: string){
    this._infoService.getRequestById(id)
      .then((resp: {ok: boolean, request: InfoRequest}) => {
        this.showRequest = resp.request;
      })

  }

  getRequests(){

    this._infoService.getInfoRequests(this._from)
      .then((resp: {ok: boolean, requests: InfoRequest[], total: number}) => {
        this.total = resp.total;
        this.requests = resp.requests;
      })

  }

  handlePage(e: PageEvent){

    if(e.pageIndex > e.previousPageIndex){
      this._from += 8;
      this.paginator.pageIndex + 1;
      this.getRequests();
    }else{
      this._from -= 8;
      this.paginator.pageIndex - 1;
      this.getRequests();
    }

  }

  refresh(){
    this.getRequests()
  }




}
