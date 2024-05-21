import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://localhost:7276/api/Drivers/"
  driversSub = new BehaviorSubject(null)

  constructor(private http:HttpClient) {
    this.loadDrivers()
   }

  getDrivers(){
    return this.driversSub
  }

  loadDrivers(){
    this.http.get(this.url).subscribe(
      (res:any)=>this.driversSub.next(res)
    )
  }

  updateDriver(driver:any){
    this.http.put(this.url+driver.id,driver).forEach(
      ()=>{this.loadDrivers()}
    )
  }

  deleteDriver(driver:any){
    this.http.delete(this.url+driver.id).forEach(
      ()=>{this.loadDrivers()}
    )
  }

  postDriver(driver:any){
    this.http.post(this.url,driver).forEach(
      ()=>{this.loadDrivers()}
    )
  }
}
