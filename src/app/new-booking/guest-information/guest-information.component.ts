import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guest-information',
  templateUrl: './guest-information.component.html',
  styleUrls: ['./guest-information.component.scss']
})
export class GuestInformationComponent implements OnInit{

   guestDetails!:FormGroup
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.guestDetails=this.fb.group({
      "totalGuest":[''],
      "guestsArr":this.fb.array([])
    })
    this.addGuest();
    
  }

  guest(){
    return this.fb .group({
      "customerName":"",
      "age":"",
      "gender":""
    })
  }

  get guestsArr(){
    return this.guestDetails.get("guestsArr") as FormArray;
  }
  addGuest(){
    this.guestsArr.push(this.guest());
  }
  removeGuest(i:number){
    this.guestsArr.removeAt(i);
  }
  saveForm(){
    console.log(this.guestDetails.value);
  }
}
