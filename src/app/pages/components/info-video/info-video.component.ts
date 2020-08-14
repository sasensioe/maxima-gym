import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-video',
  templateUrl: './info-video.component.html',
  styleUrls: ['./info-video.component.css']
})
export class InfoVideoComponent implements OnInit {

  @Output() closeInfoVideo: EventEmitter<boolean>

  constructor() {

    this.closeInfoVideo = new EventEmitter();

  }

  close(){

    this.closeInfoVideo.emit(false)

  }

  ngOnInit(): void {
  }

}
