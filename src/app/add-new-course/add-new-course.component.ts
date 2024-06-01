import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../Services/login-services.service';
import { CourseModel } from '../Model/CourseModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent implements OnInit {

  courseDetailsById:any;
  CourseList !:CourseModel[];
 
  constructor(private courseServices:LoginServicesService,private route:ActivatedRoute) { }

  ngOnInit(): void {

   
    this.getcourseDetailsById(this.route.snapshot.params["id"]);
    this.CourseList=this.courseServices.CoursesList();
    
   
  }

  displayedColumn=['seqNo',"Description","LongDescription"];


  getcourseDetailsById(Id:any)
  {
  

  this.courseServices.CoursesList().map((data)=>{
    if(data.id==Id)
    {
      this.courseDetailsById=data;
    }
    
  });
 

  }

}
