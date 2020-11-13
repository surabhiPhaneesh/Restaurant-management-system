import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ItemcrudServiceService } from "../../components/itemcrud-service.service";
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  Tables:any;
  Booking:any;
  Tname="family";
  Tnumber:number;
  Tseats:number;
  Tamount:number;
  count=0;


  constructor(private crudservice:ItemcrudServiceService,public authService: AuthService){ }
 
  
  ngOnInit(){
    this.crudservice.get_AllTable().subscribe(data => {
      this.Tables = data.map( e => {
        return{
          isEdit:false,
          id:e.payload.doc.id,
          Tname:e.payload.doc.data()['Tname'],
          Tnumber:e.payload.doc.data()['Tnumber'],
          Tseats:e.payload.doc.data()['Tseats'],
          Tamount:e.payload.doc.data()['Tamount']
        };
      })
      
    })
    this.crudservice.get_AllReservation().subscribe(datas => {
      
      this.Booking = datas.map( e => {
        this.count+=1;
        return {
          Rid:e.payload.doc.id,
          Rtime:e.payload.doc.data()['TTime'],
          Rname:e.payload.doc.data()['Uname'],
          Rnumber:e.payload.doc.data()['Unumber'],
          Rtype:e.payload.doc.data()['User_Table_type'],
          RTnumber:e.payload.doc.data()['User_Select_Table'],
          Raddress:e.payload.doc.data()['Uaddress'],
          Rseats:e.payload.doc.data()['Table_seats'],
          Ramount:e.payload.doc.data()['Table_amount']
        }
      
      })
      console.log(this.Booking)
    })

  }


  //serviced
  serviced(tab,id)
  {
    let Srecord={};
    let Ntable={};
    Srecord['Tname']=tab.Rtype;
    Srecord['Tnumber']=tab.RTnumber;
    Srecord['Tseats']=tab.Rseats;
    Srecord['Tamount']=tab.Ramount;
    Ntable['Nid']=tab.Rid;
    Ntable['Ntime']=tab.Rtime.toDate();
    Ntable['Nname']=tab.Rname;
    Ntable['Nnumber']=tab.Rnumber;
    Ntable['Ntype']=tab.Rtype;
    Ntable['NTnumber']=tab.RTnumber;
    Ntable['Naddress']=tab.Raddress;
    this.crudservice.AddServicedTable(Ntable).then(res1 => {
      this.crudservice.AddTable(Srecord).then(res2 => {
         this.crudservice.removeTable(tab.Rid);
     })
    }).then(res => {
      Swal.fire('whooo','Succesfully serviced','success');
    })
    
    
    
    
    
    

  }
 
  //add table details

 AddTable(){   
  let TRecord ={};
  TRecord['Tname']=this.Tname;
  TRecord['Tnumber']=this.Tnumber;
  TRecord['Tseats']=this.Tseats;
  TRecord['Tamount']=this.Tamount;
  this.crudservice.AddTable(TRecord).then(res => {
    this.Tname="";
    this.Tnumber=undefined;
    this.Tseats=undefined;
    this.Tamount=undefined;
    alert("Table added successfully");
  }).catch(error => {
console.log(error);
});
  }
 
}
