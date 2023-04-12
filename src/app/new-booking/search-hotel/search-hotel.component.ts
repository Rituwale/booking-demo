import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Observable, debounce, debounceTime,  map,  startWith, tap } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent implements OnInit{
  searchHotel!:FormGroup;
  parentForm!:FormGroup;
  options: string[] = ['Pune', 'Mumbai', 'Nashik'];
  filteredOptions!: Observable<string[]>;
  constructor(private fb:FormBuilder,private formContainer:FormGroupDirective,private http:HttpService){}

  ngOnInit():void{
  this.createForm();
  this.parentForm=this.formContainer.form;
  if(this.parentForm){
    this.parentForm.addControl("searchHotel",this.searchHotel);
  }
   this.filteredOptions=this.searchHotel.controls["city"].valueChanges.pipe(
    debounceTime(500),
   tap(el=> console.log("response",el)),
    startWith(''),
    map(value => this._filter(value ||'')),
  );
  }
getCityNames(value:string){
  const endPoint = "listOfCities?_like="+value;
  this.http.getDataFromServer(endPoint).subscribe((response:any)=>{
    this.filteredOptions=response;
  })
}
  

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  createForm(){
    this.searchHotel=this.fb.group({
      "city":[''],
      "checkInDate":[''],
      "checkOutDate":[''],
      "adults":[1],
      "children":[1]
    })
  }
  saveForm(){
    console.log(this.searchHotel.value);
     console.log(this.parentForm.value);
  }

  adultChange(type:string){
    if(type ==='Increment') {
      this.searchHotel.controls['adults'].setValue(this.searchHotel.controls['adults'].value+1);
    }else{
      this.searchHotel.controls['adults'].setValue(this.searchHotel.controls['adults'].value-1);
    }

  }
  childrenChange(type:string){
 if(type ==='Increment'){
  this.searchHotel.controls['children'].setValue(this.searchHotel.controls['children'].value+1);
 }else{
  this.searchHotel.controls['children'].setValue(this.searchHotel.controls['children'].value - 1);
 }
  }
}


