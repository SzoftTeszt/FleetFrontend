import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { CarsComponent } from './cars/cars.component';
import { RoutesComponent } from './routes/routes.component';

const routes: Routes
 = [
  {path:"nyuszikak" , component:DriverComponent},
  {path:"cars" , component:CarsComponent},
  {path:"routes" , component:RoutesComponent},
  {path:"" , component:DriverComponent},

  {path:"**" , component:DriverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
