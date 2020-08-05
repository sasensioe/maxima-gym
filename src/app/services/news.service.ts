import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private db: AngularFirestore) {

  }

  getData = async() => {

    try {
      return this.db.collection('articles').ref.orderBy('date', 'desc').get()
    } catch (error) {
      console.log(error)
    }

}

  getArticle = async( id ) => {
  
    try {
      return this.db.collection('articles').doc(id).get()
    } catch (error) {
      console.log(error)
    }
  
  }

  getRelated = async(category:string) => {

    try {
      return await this.db.collection('articles').ref.where('category', '==', category).orderBy('date', 'desc').limit(3).get()
    } catch (error) {
      console.log(error)
    }

  }

}