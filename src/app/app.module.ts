import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DriverComponent } from './driver/driver.component';
import { CarsComponent } from './cars/cars.component';
import { RoutesComponent } from './routes/routes.component';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DriverComponent,
    CarsComponent,
    RoutesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
