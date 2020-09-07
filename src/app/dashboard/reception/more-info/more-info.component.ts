import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { InfoRequest } from 'src/app/models/info-request.model';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  @Input() request: InfoRequest;
  @Output() closeMoreInfo: EventEmitter<boolean>

  constructor() {
    this.closeMoreInfo = new EventEmitter();
  }

  ngOnInit(): void {
  }

  close(){
    this.closeMoreInfo.emit(false);
  }

}
