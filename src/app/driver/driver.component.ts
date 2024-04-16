import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {

  drivers:any
  newDriver:any={}

  oszlopok=["id","name","address","phone"]
  constructor(private base:BaseService){
    this.base.getDrivers().subscribe(
      (res)=>this.drivers=res
    )
  }

  addDriver(){
    console.log(this.newDriver)
  }
}
