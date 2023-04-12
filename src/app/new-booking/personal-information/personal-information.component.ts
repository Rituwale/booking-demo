import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit{
  personalInfoForm!:FormGroup;
  parentForm!:FormGroup;
   countryList=[
     { value:"",viewValue:"Select"},
     { value:"US",viewValue:"United State"},
     { value:"IND",viewValue:"India"},
     { value:"Uk",viewValue:"United Kingdom"}
   ]

constructor(private fb:FormBuilder,private formContainer:FormGroupDirective){}
ngOnInit(): void {
  

this.personalInfoForm=this.fb.group({
  "customerName":[''],
  "countryName":[''],
  "mobNo":[''],
  "dob":[''],
  "age":[''],
  "gender":['']
})
this.parentForm=this.formContainer.form;
if(this.parentForm){
  this.parentForm.addControl("personalInfo",this.personalInfoForm);
}
}
saveForm(){
console.log(this.parentForm.value);
console.log(this.personalInfoForm.value)
}
}
