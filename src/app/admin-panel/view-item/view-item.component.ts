import { Component, OnInit } from '@angular/core';
import { ItemcrudServiceService } from "../../components/itemcrud-service.service";
import { AddItemComponent } from "../add-item/add-item.component";
import { Router } from "@angular/router";
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  Items:any;
  ItemName:string;
  ItemImage:string;
  ItemDescription:string;
  ItemCost:number;
  message:string;
  
  constructor(public authService: AuthService,private crudservice:ItemcrudServiceService) { }

  ngOnInit() {
    this.crudservice.get_Allitem().subscribe(data => {
      this.Items = data.map( e => {
        return{
          isEdit:false,
          id:e.payload.doc.id,
          ItemName:e.payload.doc.data()['Itemname'],
          ItemImage:e.payload.doc.data()['ItemImage'],
          ItemDescription:e.payload.doc.data()['ItemDescription'],
          ItemCost:e.payload.doc.data()['ItemCost']
        };
      })
      console.log(this.Items);
    })
  }

// // edit
EditRecord(Record)
{
  Record.isEdit=true;
  Record.editName=Record.ItemName;
  Record.editImage = Record.ItemImage;
  Record.editDes = Record.ItemDescription;
  Record.editCost=Record.ItemCost;
  
}


//delete
DeleteRecord(itemId){
  this.crudservice.delete_item(itemId);
}
}
