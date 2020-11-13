import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  constructor(private fireservices:AngularFirestore,public router: Router) { }
  //to get item
  get_Allitem()
  {
    return this.fireservices.collection('Items').snapshotChanges();
  }
  get_AllTable()
  {
    return this.fireservices.collection('Table').snapshotChanges();
  }
 get_avaTable(types:string)
 {
   return this.fireservices.collection('Table',ref => {return ref.orderBy('Tnumber').where('Tname','==',types)}).snapshotChanges();
 }
 getableDetails(table)
 {
  return this.fireservices.collection('Table',ref => ref.where('Tnumber','==',table)).snapshotChanges();
 }
 AddResTable(Record)
 {
  return this.fireservices.collection('TableReservation').add(Record);
 }
 delete_table(tabId)
  {
    this.fireservices.doc('Table/'+tabId).delete();
  }
  AddToCart(dishId)
  {
    
  }
}
