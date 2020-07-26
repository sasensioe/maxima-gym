import { Injectable } from '@angular/core';

export interface Facility {
  name: string;
  img: string;
  class?: string;
  content: any[];
}

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {


  facilities: Facility[] = [
    {name: 'swimming pool', img: 'assets/img/facilities/pool.jpg', class: 'active',
      content: [
        {img: 'assets/img/facilities/icons/expand.svg', title: '2.500 m3', desc: 'capacity'},
        {img: 'assets/img/facilities/icons/temp.svg', title: 'heated', desc: 'all year'},
        {img: 'assets/img/facilities/icons/calendar.svg', title: 'open', desc: '365 days'},
        {img: 'assets/img/facilities/icons/streets.svg', title: '8 streets', desc: 'where to swim'},
        {img: 'assets/img/facilities/icons/trampoline.svg', title: 'trampolines', desc: 'for advanced swimmers'},
      ]
    },
    {name: 'cardio area', img: 'assets/img/facilities/cardio.jpg',
      content: [
        {img: 'assets/img/facilities/icons/expand.svg', title: '+250 m2', desc: 'capacity'},
        {img: 'assets/img/facilities/icons/running.svg', title: '+60 machines', desc: 'for cardio'},
        {img: 'assets/img/facilities/icons/tv.svg', title: 'live tv', desc: 'everywhere'}
      ]
    },
    {name: 'machines area', img: 'assets/img/facilities/machines.jpg',
      content: [
        {img: 'assets/img/facilities/icons/expand.svg', title: '+200 m2', desc: 'capacity'},
        {img: 'assets/img/facilities/icons/dumbbell.svg', title: '+200 machines', desc: 'for muscle'},
        {img: 'assets/img/facilities/icons/tv.svg', title: 'live tv', desc: 'everywhere'},
      ]
    },
    {name: 'colective class area', img: 'assets/img/facilities/colective-classes.jpg',
      content: [
        {img: 'assets/img/facilities/icons/expand.svg', title: '120 m2', desc: 'capacity'},
        {img: 'assets/img/facilities/icons/audio.svg', title: 'dolby sound', desc: 'for training'},
        {img: 'assets/img/facilities/icons/dumbbell.svg', title: 'free material', desc: 'during classes'},
      ]
    },
    {name: 'stretching area', img: 'assets/img/facilities/stretching.jpg',
      content: [
        {img: 'assets/img/facilities/icons/expand.svg', title: '80 m2', desc: 'capacity'},
        {img: 'assets/img/facilities/icons/stretching.svg', title: 'free material', desc: 'for everyone'},
      ]
    },
    {name: 'locker rooms', img: 'assets/img/facilities/locker-room.jpg',
      content: [
        {img: 'assets/img/facilities/icons/expand.svg', title: '30 m2', desc: 'capacity'},
        {img: 'assets/img/facilities/icons/shower.svg', title: 'showers', desc: 'cleaned every hour'},
        {img: 'assets/img/facilities/icons/wc.svg', title: 'wc', desc: 'cleaned every hour'},
        {img: 'assets/img/facilities/icons/hair-dryer.svg', title: 'hair dryer', desc: 'service'},
        {img: 'assets/img/facilities/icons/locker.svg', title: 'lockers', desc: 'with contactless card'},

      ]
    },
  ]

  constructor() { }
}
