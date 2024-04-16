import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuItems = [
    {text:"Utak", link:"/routes"},
    {text:"Sofőrök", link:"/nyuszikak"},
    {text:"Autok", link:"/cars"},
    {text:"Kapcsolat", link:"/"},
    ]
  almak:any

}
