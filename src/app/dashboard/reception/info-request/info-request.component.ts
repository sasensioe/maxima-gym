import { Component, OnInit, Input, Output } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
import { InfoRequest } from 'src/app/models/info-request.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-request',
  templateUrl: './info-request.component.html',
  styleUrls: ['./info-request.component.css']
})
export class InfoRequestComponent implements OnInit {

  public moreInfo: boolean;
  
  @Input() request: InfoRequest;
  @Output() deleteRequest;

  constructor( private _infoService: InfoService ) {
    this.deleteRequest = new EventEmitter()
  }

  ngOnInit(): void {

  }

  setResponse(resp: boolean){

    this._infoService.setResponse(this.request.id, resp)
      .then((resp: {ok: boolean, msg: string}) => {
        this.deleteRequest.emit();
        this.request = null
      })

  }

  registerCall(){

    this._infoService.registerCall(this.request.id)
      .then((resp: {ok: boolean, call}) => {
        this.request.calls.push(resp.call)
        this.request.calls = [...this.request.calls]
      })

  }

  openMoreInfo(){
    this.moreInfo = true;
  }

  closeMoreInfo(event:boolean){
    this.moreInfo = event;
  }

}
