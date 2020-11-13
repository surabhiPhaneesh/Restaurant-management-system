import { Component, OnInit, ɵConsole } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCrudService } from 'src/app/components/user-crud.service';
import { DatePipe } from '@angular/common'
import { Identifiers } from '@angular/compiler';
@Component({
  selector: 'app-table-reserve',
  templateUrl: './table-reserve.component.html',
  styleUrls: ['./table-reserve.component.css']
})
export class TableReserveComponent implements OnInit
{
  userid:string;
  ava_tables:any;
  tables:any;
  Uname:string;
  Unumber:number;
  Uaddress:string;
  User_Table_type:string;
  User_Select_Table:string;
  myDate = new Date();//to get system time
  Tname="family";
  Tnumber:number;
  Tseats:number;
  Tamount:number;
  count=0;
  isReserve=false;
  cNumber:number;
  

  // to get userId
  constructor(public afAuth: AngularFireAuth,public crudservice:UserCrudService,public datepipe: DatePipe) 
  {
    this.afAuth.authState.subscribe(user =>
    {
      this.userid=user.uid;
    });
  }

  //to get all item
  ngOnInit()
  {
    this.crudservice.get_AllTable().subscribe(data => {
      this.tables = data.map( e => {
        return{
          id:e.payload.doc.id,
          Tname:e.payload.doc.data()['Tname'],
          Tnumber:e.payload.doc.data()['Tnumber'],
          Tseats:e.payload.doc.data()['Tseats'],
          Tamount:e.payload.doc.data()['Tamount']
        };
      })
    })
  }
//to check available seats
  check_availability()
  {
    this.isReserve=false;
    this.count=0;
    this.crudservice.get_avaTable(this.User_Table_type).subscribe(data => {
    this.ava_tables = data.map( e => {
        
      return{
        ava_id:e.payload.doc.id,
        ava_name:e.payload.doc.data()['Tname'],
        ava_number:e.payload.doc.data()['Tnumber'],
        ava_seats:e.payload.doc.data()['Tseats'],
        ava_amount:e.payload.doc.data()['Tamount']
      };
    })
  })
  this.count=1;
     console.log(this.ava_tables) ;
  }
 //to reserve
  reserve()
  {
         this.isReserve=!this.isReserve;
  }

  //to book the table
  book()
  {
  
    let Records_table={};
    this.crudservice.getableDetails(this.User_Select_Table).subscribe(data =>
    {
        Records_table= data.map( e => {
          return {
            tab1_id:e.payload.doc.id,
            tab1_seats:e.payload.doc.data()['Tseats'],
            tab1_amount:e.payload.doc.data()['Tamount']
          };
        })
        let BRecord ={};
        BRecord['userid']=this.userid
        BRecord['Uname']=this.Uname;
        BRecord['Unumber']=this.Unumber;
        BRecord['Uaddress']=this.Uaddress;
        BRecord['User_Table_type']=this.User_Table_type;
        BRecord['User_Select_Table']=this.User_Select_Table;
        BRecord['cNumber']=this.cNumber;
        BRecord['User_Table_id']=Records_table[0].tab1_id;
        BRecord['Table_seats']=Records_table[0].tab1_seats;
        BRecord['Table_amount']=Records_table[0].tab1_amount;
        BRecord['TTime']=this.myDate;
        // console.log(this.userid);
        this.crudservice.AddResTable(BRecord).then(res =>
        {
          this.Uname="";
          this.Unumber=undefined;
          this.Uaddress="";
          this.User_Table_type="";
          this.User_Select_Table="";
          this.count=0;
          this.isReserve=!this.isReserve;
          alert("Table booked successfully");
        }).catch(error =>
          {
            console.log(error);
          });
        this.crudservice.delete_table(Records_table[0].tab1_id);
    });
  }
  
}
