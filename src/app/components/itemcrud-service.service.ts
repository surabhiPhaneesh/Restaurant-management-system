import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class ItemcrudServiceService {

  constructor(private fireservices:AngularFirestore,public router: Router) { }

  Add_item(Record)
  {
    return this.fireservices.collection('Items').add(Record);
  }
  get_Allitem()
  {
    return this.fireservices.collection('Items').snapshotChanges();
  }
  update_item(recordid,record)
  {
    console.log("Items/",recordid);
    this.fireservices.doc('Items/'+recordid).update(record);
    alert("data updated successfully");
  }
  delete_item(itemId)
  {
    this.fireservices.doc('Items/'+itemId).delete();
  }
//get tables
  AddTable(Record)
  {
    return this.fireservices.collection('Table').add(Record);
  }
  get_AllTable()
  {
    return this.fireservices.collection('Table',ref => ref.orderBy('Tseats','asc')).snapshotChanges();
  }
  AddServicedTable(Record)
  {
    return this.fireservices.collection('Serviced_Table').add(Record);
  }
  removeTable(id)
  {
    this.fireservices.doc('TableReservation/'+id).delete();
  }

  //to get details regading reservation
  get_AllReservation()
  {
    return this.fireservices.collection('TableReservation',ref => ref.orderBy('TTime','asc')).snapshotChanges();
  }
  get_AllServicedData()
  {
    return this.fireservices.collection('Serviced_Table').snapshotChanges();
  }
}
