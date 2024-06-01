import { Component, Input, OnInit } from '@angular/core';
import { CourseModel } from '../Model/CourseModel';
import { LoginServicesService } from '../Services/login-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private courseServices:LoginServicesService) { }

  courses !:CourseModel[];
 
  ngOnInit(): void {
this.GetCourse();
  }
  GetCourse()
  {

  this.courses=this.courseServices.CoursesList();
  }

}
