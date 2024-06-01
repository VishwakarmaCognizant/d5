import { formatDate } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrationModel } from 'src/app/Model/RegistrationModel';
import { AdminServiceModuleService } from 'src/app/Services/admin-service-module.service';
declare let alertify: any;


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public adminService:AdminServiceModuleService,
  private formBuilder:FormBuilder,public dialog:MatDialog,public dialogRef:MatDialogRef<EditUserComponent>) { }

  ngOnInit(): void {
    console.log(this.data.UserId)
    this.GetUserDetailsById();
  }

  UserEditDetails=this.formBuilder.group(
    {
    "Name":["",Validators.required],
    "LastName":["",Validators.required],
    "Email":["",Validators.required],
    "Mobile":["",Validators.required],
    "DateOfBirth":[new Date(),Validators.required],
    "Address":["",Validators.required]

  });





  GetUserDetailsById()
  {

    this.adminService.GetUserDetailsById(this.data.UserId).subscribe(resp=>{
    let dob=resp.DOB;
   this.UserEditDetails.setValue({
    "Name":resp.Name,
    "LastName":resp.LastName,
    "Email":resp.Email,
    "Mobile":resp.Mobile, 
    "DateOfBirth":resp.DOB,
    "Address":resp.Address

   });
       
    });
  }


  SaveEditUserProfile()
  {
    const ModifiedUserData=new RegistrationModel;
    
    ModifiedUserData.Address=this.UserEditDetails.get("Address")?.value;
    ModifiedUserData.Name=this.UserEditDetails.get("Name")?.value;
    ModifiedUserData.LastName=this.UserEditDetails.get("LastName")?.value;
    ModifiedUserData.Email=this.UserEditDetails.get("Email")?.value;
    ModifiedUserData.Mobile=this.UserEditDetails.get("Mobile")?.value;
    ModifiedUserData.Id=this.data.UserId;
    ModifiedUserData.DOB=this.UserEditDetails.get("DateOfBirth")?.value;
     
    
this.adminService.UpdateUserData(ModifiedUserData).subscribe(resp=>{

  console.log(resp);
  if(resp.Message=="success")
  {
    alertify.success(resp.Response);
    this.dialog.closeAll();

  }
  else
  {
    alertify.error(resp.Response);
  }

});


    
    
  }
}
