import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-edit-bookings',
  templateUrl: './edit-bookings.component.html',
  styleUrls: ['./edit-bookings.component.scss']
})
export class EditBookingsComponent implements OnInit{
  payStatus=['Paid','Not Paid'];
  editBookingsForm!:FormGroup;
  constructor(private fb:FormBuilder,private dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public data: any,private http:HttpService,  public dialogRef: MatDialogRef<EditBookingsComponent>){
    console.log("data",data)
  }

  ngOnInit(): void {
    this.editBookingsForm=this.fb.group({
      "checkInDate":[''],
      "checkOutDate":[''],
      "paymentStatus":['']
    })
    this.setBookingDetails();
  }
  setBookingDetails(){
    this.editBookingsForm.get("checkInDate")?.setValue(this.data.searchHotel.checkInDate);
    this.editBookingsForm.get("checkOutDate")?.setValue(this.data.searchHotel.checkOutDate);
    this.editBookingsForm.get("paymentStatus")?.setValue(this.data.paymentDetails.paymentStatus);
  }
  update(){
    this.data.searchHotel.checkInDate=this.editBookingsForm.value.checkInDate;
    this.data.searchHotel.checkOutDate=this.editBookingsForm.value.checkOutDate;
    this.data.paymentDetails.paymentStatus=this.editBookingsForm.value.paymentStatus;

    let endPoint="hotel-booking/"+this.data.id;
    this.http.putDataToServer(endPoint,this.data).subscribe((el:any)=>{
      if(el){
        this.dialogRef.close({booking:this.data})
        console.log(el);
      }
    })
  
  }
  close(){
    this.dialogRef.close();
  }
  }


