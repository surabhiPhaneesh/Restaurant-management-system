import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
// import { ItemcrudServiceService } from "../../components/itemcrud-service.service";
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  // Items:any;
  // ItemName:string;
  // ItemImage:string;
  // ItemDescription:string;
  // ItemCost:number;
  // message:string;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }


}
