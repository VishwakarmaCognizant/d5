import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-course-step1',
  templateUrl: './course-step1.component.html',
  styleUrls: ['./course-step1.component.css']
})
export class CourseStep1Component implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }


StepFirstForm=this.formBuilder.group({
  title:['',[Validators.required,Validators.minLength(3),Validators.maxLength(60)]],
  releasedAt:[new Date(2024,0,1),Validators.required],
  category:["BEGINNER",Validators.required],
  courseType:["premium",Validators.required],
  downloadsAllowed:[false,Validators.requiredTrue],
  longDescription:["",[Validators.required,Validators.minLength(3)]]


});



dateClass:MatCalendarCellClassFunction<Date>=(celldate,View)=>{

const date=celldate.getDate();
if(View=="month")
{
  return (date==1)?"highlight-date":"";
}
return "";
}


get ftitle()
{
return this.StepFirstForm.controls["title"];

}
get freleasedAt()
{
return this.StepFirstForm.controls["releasedAt"];

}
get fcategory()
{
return this.StepFirstForm.controls["category"];

}

get fcourseType()
{
return this.StepFirstForm.controls["courseType"];

}


get fdownloadsAllowed()
{
return this.StepFirstForm.controls["downloadsAllowed"];

}
get flongDescription()
{
return this.StepFirstForm.controls["longDescription"];

}
}
