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
    {name: 'swimming pool', img: 'assets/img/pages/facilities/pool.jpg', class: 'active',
      content: [
        {img: 'assets/img/pages/facilities/icons/expand.svg', title: '2.500 m3', desc: 'capacity'},
        {img: 'assets/img/pages/facilities/icons/temp.svg', title: 'heated', desc: 'all year'},
        {img: 'assets/img/pages/facilities/icons/calendar.svg', title: 'open', desc: '365 days'},
        {img: 'assets/img/pages/facilities/icons/streets.svg', title: '8 streets', desc: 'where to swim'},
        {img: 'assets/img/pages/facilities/icons/trampoline.svg', title: 'trampolines', desc: 'for advanced swimmers'},
      ]
    },
    {name: 'cardio area', img: 'assets/img/pages/facilities/cardio.jpg',
      content: [
        {img: 'assets/img/pages/facilities/icons/expand.svg', title: '+250 m2', desc: 'capacity'},
        {img: 'assets/img/pages/facilities/icons/running.svg', title: '+60 machines', desc: 'for cardio'},
        {img: 'assets/img/pages/facilities/icons/tv.svg', title: 'live tv', desc: 'everywhere'}
      ]
    },
    {name: 'machines area', img: 'assets/img/pages/facilities/machines.jpg',
      content: [
        {img: 'assets/img/pages/facilities/icons/expand.svg', title: '+200 m2', desc: 'capacity'},
        {img: 'assets/img/pages/facilities/icons/machine.svg', title: '+200 machines', desc: 'for muscle'},
        {img: 'assets/img/pages/facilities/icons/tv.svg', title: 'live tv', desc: 'everywhere'},
      ]
    },
    {name: 'colective class area', img: 'assets/img/pages/facilities/colective-classes.jpg',
      content: [
        {img: 'assets/img/pages/facilities/icons/expand.svg', title: '120 m2', desc: 'capacity'},
        {img: 'assets/img/pages/facilities/icons/audio.svg', title: 'dolby sound', desc: 'for training'},
        {img: 'assets/img/pages/facilities/icons/dumbbell.svg', title: 'free material', desc: 'during classes'},
      ]
    },
    {name: 'stretching area', img: 'assets/img/pages/facilities/stretching.jpg',
      content: [
        {img: 'assets/img/pages/facilities/icons/expand.svg', title: '80 m2', desc: 'capacity'},
        {img: 'assets/img/pages/facilities/icons/stretching.svg', title: 'free material', desc: 'for everyone'},
      ]
    },
    {name: 'locker rooms', img: 'assets/img/pages/facilities/locker-room.jpg',
      content: [
        {img: 'assets/img/pages/facilities/icons/expand.svg', title: '30 m2', desc: 'capacity'},
        {img: 'assets/img/pages/facilities/icons/shower.svg', title: 'showers', desc: 'cleaned every hour'},
        {img: 'assets/img/pages/facilities/icons/wc.svg', title: 'wc', desc: 'cleaned every hour'},
        {img: 'assets/img/pages/facilities/icons/hair-dryer.svg', title: 'hair dryer', desc: 'service'},
        {img: 'assets/img/pages/facilities/icons/locker.svg', title: 'lockers', desc: 'with contactless card'},

      ]
    },
  ]

}
