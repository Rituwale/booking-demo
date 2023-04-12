import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit{
  monthList=['Jan','Fab','March','April'];
  year=[2023,2024,2025,2026];
  payStatus=['Paid','Not Paid'];

  paymentForm!:FormGroup;
  parentForm!:FormGroup;
  @Input()stepper!:MatStepper;
constructor(private fb:FormBuilder,private formContainer:FormGroupDirective,private http:HttpService){}

ngOnInit(): void {
  this.paymentForm=this.fb.group({
    "nameOnTheCard":[''],
    "debitCardNumber":[''],
    "expiryMonth":[''],
    "expiryYear":[''],
    "securityCode":[''],
    "paymentStatus":['']
  })
  this.parentForm=this.formContainer.form;
  if(this.parentForm){
    this.parentForm.addControl("paymentDetails",this.paymentForm);
  }
  console.log();
}
saveForm(){
  console.log(this.parentForm.value);
  console.log(this.paymentForm.value)
}
placeOrder(){
  const data=this.parentForm.value;
  this.http.postDataToServer("hotel-booking",data).subscribe((el:any)=>{
    if(el){
      this.stepper.next();
    }
  },error=>{

  })
}
}
  