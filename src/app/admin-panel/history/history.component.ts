import { Component, OnInit } from '@angular/core';
import { ItemcrudServiceService } from 'src/app/components/itemcrud-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  Serviced_table:any;
  constructor(private crudservice:ItemcrudServiceService) { }

  ngOnInit(){
    this.crudservice.get_AllServicedData().subscribe(datas => {
      
      this.Serviced_table = datas.map( e => {
        return {
          
          Rtime:e.payload.doc.data()['Ntime'],
          Rname:e.payload.doc.data()['Nname'],
          Rnumber:e.payload.doc.data()['Nnumber'],
          Rtype:e.payload.doc.data()['Ntype'],
          RTnumber:e.payload.doc.data()['NTnumber'],
          Raddress:e.payload.doc.data()['Naddress'],
          Rid:e.payload.doc.data()['Nid']
         
        }
      
      })
      console.log(this.Serviced_table)
    })
  }

}
