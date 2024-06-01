import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { SubjectService } from './Services/subject.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'Angular Module';
   public SubjectData !:string;    

@ViewChild("strongid") marker!:ElementRef;
 
  constructor(public subjectService:SubjectService,private formbuilder:FormBuilder){}
 
  ngOnInit(): void {
    
  
  }

  ngAfterViewInit(): void {

    this.marker.nativeElement.style.color="green";
  }

  formDetails=this.formbuilder.group({

   "message":["",Validators.required]

  });

  getdatafromSubject()
  {
   
    this.subjectService.GetData(this.formDetails.get("message")?.value);
    
  }

  showdatachildtoparent(data:any)
  {
    console.log(data);
  }
}
