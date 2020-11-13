import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Special_food=["../../assets/Aloo Tikki-min.jpg","../../assets/Banana-Fritter-min-2.jpg","../../assets/Chole Bhature-min.jpg","../../assets/Dabeli-min.jpg","../../assets/Ghugni-min.jpg","../../assets/Kachori-min.jpg","../../assets/kairi-panha(mango).jpeg","../../assets/Kathi Roll-min.jpg","../../assets/Misal-min.jpg","../../assets/Parantha-min.jpg","../../assets/Ragda Pattice-min.jpg","../../assets/Sabudana-min.jpg"];
item_names=["Aloo Tikki","Banana Fritter","Chole Bhature","Dabeli","Ghugni","Kachori","Kairi panha(Mango)","Kathi Roll(veg roll)","Misal","Paratha(paneer)","Ragda Pattice","Sabudana vada"]
 

  constructor() { }

  ngOnInit(): void {
  }

}
