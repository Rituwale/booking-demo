import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/core/services/http.service';
import { EditBookingsComponent } from '../edit-bookings/edit-bookings.component';





@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.scss']
})
export class AllBookingsComponent implements OnInit{
 
  displayedColumns:any=['select','customerName','checkInDate','mobNo','roomType','paymentStatus'];
  hotelArr:any;
  dataSource:any;

  constructor(private http:HttpService,private dialog:MatDialog){}

 ngOnInit(): void {
  this.http.getDataFromServer("hotel-booking").subscribe((el:any)=>{
    this.hotelArr=el;
    this.dataSource = new MatTableDataSource(el);
  })
  

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(booking:any){
    let dialogConfig=new MatDialogConfig();
    dialogConfig.width="600px";
    dialogConfig.data = booking;
   const dialogRef= this.dialog.open(EditBookingsComponent,dialogConfig);
   dialogRef.afterClosed().subscribe(result=>{
    console.log("data received from dialogComp",result)
   })
  }
  
 }
  