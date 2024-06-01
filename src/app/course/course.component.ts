import { Component, Input, OnInit } from '@angular/core';
import { CourseModel } from '../Model/CourseModel';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() Course !:CourseModel[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
