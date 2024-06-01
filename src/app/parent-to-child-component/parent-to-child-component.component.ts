import { Component, OnInit } from '@angular/core';
import { UserMasterList } from '../Model/UserMasterList';

@Component({
  selector: 'app-parent-to-child-component',
  templateUrl: './parent-to-child-component.component.html',
  styleUrls: ['./parent-to-child-component.component.css']
})
export class ParentToChildComponentComponent implements OnInit {

ChildData:string="Hi I am Child data";
 pushdatat !:string;
notifydata !:string;
userList:UserMasterList=new UserMasterList();
  constructor() { }

  ngOnInit(): void {
  }

  childtoparent(data:any)
  {
this.notifydata=data;
  }

 

  username !:string;

  pushdata()
  {
this.pushdatat=this.username;
console.log(this.username);
this.userList.Name=this.username;
this.userList.Price=200;

  }
}

