import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string=" http://localhost:3000/"
  constructor(private http:HttpClient) { }

  getDataFromServer(endPoint:string):any{
   const url= this.baseUrl+endPoint;
   return this.http.get(url);
  }
  postDataToServer(endPoint:string,data:any){
    const url=this.baseUrl + endPoint;
    return this.http.post(url,data)
   }
   putDataToServer(endPoint:string,data:any){
    const url=this.baseUrl + endPoint;
    return this.http.put(url,data)
   }

}
