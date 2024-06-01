import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  searchkey !:string;
  ngOnInit(): void {
    
  }


  countryList=[

    {code:"ind",name:"India"},
    {code:"us",name:"United State of America"},
    {code:"china",name:"China"}
  ];


  choice()
  {


  }
}
