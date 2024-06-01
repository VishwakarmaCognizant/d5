import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { SubjectService } from '../Services/subject.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public subjectMessage !:string; 

  @Input() message!:string;

  @Output() Outputmessage: EventEmitter<string> = new EventEmitter<string>();

  constructor(private servicesubject:SubjectService) { }

  ngOnInit(): void {

    this.servicesubject.SubjectData.subscribe(d=>{
      this.subjectMessage=d
    });
 
    
  }

}
