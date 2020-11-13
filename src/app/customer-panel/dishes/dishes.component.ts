import { Component, OnInit } from '@angular/core';
import {  UserCrudService } from "../../components/user-crud.service";
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
Items:any;
  constructor(public authService: AuthService,private usercrudservice:UserCrudService) { }

  ngOnInit() {
    this.usercrudservice.get_Allitem().subscribe(data => {
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
  AddToCart(Iid)
  {
    // let Record={};
    // Record['Itemname']=this.ItemName;
    // Record['ItemImage']=this.ItemImage;
    // Record['ItemDescription']=this.ItemDescription;
    // Record['ItemCost']=this.ItemCost;
    

  }
}
