import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {

  drivers:any
  newDriver:any={}
  keresendo=""
 


  oszlopok=[
    {key:"id", text:"Azonosító", type:"plain"},
    {key:"name", text:"Név", type:"text"},
    {key:"address", text:"Cím", type:"text"},
    {key:"phone", text:"Telefon", type:"tel"},
  ]
  constructor(private base:BaseService){
    this.base.getDrivers().subscribe(
      (res)=>this.drivers=res
    )
  }

  addDriver(){
    console.log(this.newDriver)
    this.base.postDriver(this.newDriver)
    this.newDriver={}
  }

  deleteDriver(driver:any){
    this.base.deleteDriver(driver)
  }

  updateDriver(driver:any){
    this.base.updateDriver(driver)
  }
}
