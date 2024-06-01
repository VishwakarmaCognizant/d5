import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-binding',
  templateUrl: './properties-binding.component.html',
  styleUrls: ['./properties-binding.component.css']
})
export class PropertiesBindingComponent implements OnInit {

  PropertiesBinding="This is string interpolation";
  username !:string;
  constructor() { }

  ngOnInit(): void {

  }

}
