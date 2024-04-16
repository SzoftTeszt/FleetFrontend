import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://localhost:7276/api/Drivers/"

  constructor(private http:HttpClient) { }

  getDrivers(){
    return this.http.get(this.url)
  }
}
