import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserListModel } from '../Model/UserListModel';
import { UserMasterList } from '../Model/UserMasterList';
 

@Component({
  selector: 'app-child-to-parent-comuncation',
  templateUrl: './child-to-parent-comuncation.component.html',
  styleUrls: ['./child-to-parent-comuncation.component.css']
})
export class ChildToParentComuncationComponent implements OnInit,AfterContentInit,OnChanges,DoCheck {

@Input() childdata !:string;
@ContentChild("titlepage") titledata!:ElementRef;

@Output() notifymessage:EventEmitter<string> =new EventEmitter<string>();
  constructor() { }

 @Input() product !:UserMasterList;
  username !:string;

  ngOnInit(): void {

  // console.log(this.product);
  }

  ngAfterContentInit(): void {
    
    // console.log(this.titledata);

    // this.titledata.nativeElement.style.color="green";
  }

ngOnChanges(changes: SimpleChanges): void {
  
  console.log("on Changes",changes);

}
ngDoCheck()
{
  console.log("DO Check",this.product);
}
  
  senddata()
  {
     console.log(this.username);
    this.notifymessage.emit(this.username);

  }


}
