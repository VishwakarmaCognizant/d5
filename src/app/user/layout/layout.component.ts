import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  FullName:any;
  UserType:any;
  constructor() { }

  ngOnInit(): void {

     
    this.FullName= sessionStorage.getItem("UserName"); 
   
    this.UserType= sessionStorage.getItem("UserType"); 

  }

}
