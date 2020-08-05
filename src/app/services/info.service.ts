import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor( private db:AngularFirestore ) { }

  sendInfo(na:string, em:string, ph:string, me:string){

    this.db.collection('info-request').ref.add(
      {
        name: na,
        email: em,
        phone: ph,
        message: me,
        date: new Date()
      }
    )

  }

}
