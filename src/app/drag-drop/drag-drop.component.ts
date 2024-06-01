import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  empList=[
    {id:1,Name:"Sujeet",CompanyName:"FIS",Location:"Gurgoaw"},
    {id:2,Name:"Mahesh",CompanyName:"Cognizant",Location:"Pune"},
    {id:3,Name:"Shivam",CompanyName:"TCS",Location:"Delhi"},
    {id:4,Name:"Akash",CompanyName:"Accenture",Location:"Delhi"},
    {id:5,Name:"Vivek",CompanyName:"Infosys",Location:"Delhi"},
    {id:6,Name:"Amar",CompanyName:"Capgemini",Location:"Delhi"},
    {id:7,Name:"Satish",CompanyName:"Indusland Bank",Location:"Mumbai"},

  
  ];
  constructor() { }

  ngOnInit(): void {
  }
  drop(event:CdkDragDrop<string[]>)
  {
    
moveItemInArray(this.empList,event.previousIndex,event.currentIndex);

  }

}
