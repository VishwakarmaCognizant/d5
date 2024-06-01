import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes-component.component.html',
  styleUrls: ['./pipes-component.component.css']
})
export class PipesComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData=[
    {
id:101,name:"john",city:"Delhi",salary:"20000",dob:new Date("05/10/1989")
    },
    {
      id:102,name:"Shivam",city:"Delhi",salary:"20000",dob:new Date("05/10/1988")
          },
          {
            id:103,name:"Rohit",city:"Delhi",salary:"20000",dob:new Date("05/10/1987")
      }
  ];

}
