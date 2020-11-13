import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ItemcrudServiceService } from "../../components/itemcrud-service.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  Items:any;
  ItemName:string;
  ItemImage:string;
  ItemDescription:string;
  ItemCost:number;
  message:string;
  constructor(private crudservice:ItemcrudServiceService,public authService: AuthService) { }

  ngOnInit(){

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

  createRecord(){
    //CALL SERVICE
    let Record ={};
    Record['Itemname']=this.ItemName;
    Record['ItemImage']=this.ItemImage;
    Record['ItemDescription']=this.ItemDescription;
    Record['ItemCost']=this.ItemCost;
    
    this.crudservice.Add_item(Record).then(res => {
      this.ItemName="";
      this.ItemImage="";
      this.ItemDescription="";
      this.ItemCost=undefined;
      alert("item added successfully");
    }).catch(error => {
  console.log(error);
});
}


EditRecord(Record)
{
  Record.isEdit=true;
  Record.editName=Record.ItemName;
  Record.editImage = Record.ItemImage;
  Record.editDes = Record.ItemDescription;
  Record.editCost=Record.ItemCost;
  console.log("inside edit record",Record);
}

UpdateRecord(recordData){
  console.log("inside update record",recordData);
  let record ={}
  record['Itemname']=recordData.editName;
  record['ItemImage']=recordData.editImage;
  record['ItemDescription'] = recordData.editDes;
  record['ItemCost']=recordData.editCost;
  console.log(record);
  this.crudservice.update_item(recordData.id,record);
  recordData.isEdit=false;
}

DeleteRecord(itemId){
  this.crudservice.delete_item(itemId);
}

}


