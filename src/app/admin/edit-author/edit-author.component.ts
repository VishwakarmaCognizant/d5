import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { AuthorModel } from 'src/app/Model/AuthorModel';
import { AdminServiceModuleService } from 'src/app/Services/admin-service-module.service';
declare let alertify:any;
@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dailog:MatDialog,public formBuilder:FormBuilder,
  public adminService:AdminServiceModuleService) { }

  ngOnInit(): void {

  //  alert(this.data.UserId);
  this.getAuthorDetailsById();
    
  }
AuthorRegistration=this.formBuilder.group({

"AuthorName":["",Validators.required]

});



  closeDialog()
  {
   this.dailog.closeAll();
  }


  getAuthorDetailsById()
  {

this.adminService.getAuthorDetailsById(this.data.UserId).subscribe(resp=>{

  console.log(resp);
  this.AuthorRegistration.setValue({
"AuthorName":resp.authorName

  })
});
  }

  UpdateAuthor()
  {
    const UpdateAuthor=new AuthorModel();

UpdateAuthor.id=this.data.UserId;
UpdateAuthor.authorName=this.AuthorRegistration.get("AuthorName")?.value;

this.adminService.UpdateAuthor(UpdateAuthor).subscribe(resp=>{

if(resp.Code=="1")
{
alertify.success(resp.Remark);
this.dailog.closeAll();

}
else
{
  alertify.error(resp.Remark);
}


});

  }

}
