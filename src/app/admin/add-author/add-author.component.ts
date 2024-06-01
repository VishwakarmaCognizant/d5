import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthorModel } from 'src/app/Model/AuthorModel';
import { AdminServiceModuleService } from 'src/app/Services/admin-service-module.service';
import { EditAuthorComponent } from '../edit-author/edit-author.component';
declare let alertify: any;
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

   AuthorList:Array<AuthorModel>=[];

   public ISpinnerDataLoading:boolean=false;
   public ISpinnerSaveData:boolean=false;

   dataSource = new MatTableDataSource<AuthorModel>(this.AuthorList)

   displayedColumns: string[] = ["Sno",'Author Name', 'Creation Date','Status', 'Action'];

  constructor(private authorService:AdminServiceModuleService,private formBuilder:FormBuilder,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.GetAuthorList();

    
  }

 AddAuthorForm=this.formBuilder.group({
  "AuthorName":["",Validators.required]
 });




 EditUser(UserId:any)
 {

  this.dialog.open(EditAuthorComponent,{data:{UserId:UserId,UserType:"EditUser"}});
this.GetAuthorList();
 }

 ActiveInActive(UserId:any,StatusType:any)
 {

  let status="";
if(StatusType=="Active")
{
status="Inactive";
}
else
{
  status="Active";
}
  if(confirm("Are you sure you want to "+status +"?"))
  {
    const author=new AuthorModel();
    author.id=UserId;
    author.IsActive=StatusType;
    this.authorService.ActiveInActiveAuthorStatus(author).subscribe(resp=>{
  
  if(resp.Code=="1")
  {
    alertify.success(resp.Remark);
    this.GetAuthorList();
  
  }
  else
  {
    alertify.error(resp.Remark);
  }
  
    });
  }
  

 }

 DeleteAuthor(UserId:any)
 {

  if(confirm("Are you sure to delete Author ?"))
  {

  
this.authorService.DeleteAuthor(UserId).subscribe(resp=>{

if(resp.Code=="1")
{
  alertify.success(resp.Remark);
  this.GetAuthorList();
}

});

  }
 }



 SaveAuthor()
 {

  this.ISpinnerSaveData=true;

   const AddNewAuthor=new AuthorModel;
   AddNewAuthor.authorName=this.AddAuthorForm.get("AuthorName")?.value;

  this.authorService.AddAuthor(AddNewAuthor).subscribe(resp=>{
    console.log(resp);
 if(resp.Code=="1")
 {
alertify.success(resp.Remark);
this.AddAuthorForm.reset();
  this.ISpinnerSaveData=false;
  this.GetAuthorList();
 }
 else
 {
  alertify.error(resp.Remark);
  this.ISpinnerSaveData=false;
  this.GetAuthorList();
 }


  });

 }



 GetAuthorList()
 {
this.authorService.GetAuthorList().subscribe(resp=>{


setTimeout(()=>{

  this.AuthorList=resp;
},2000);

setTimeout(()=>{
 this.ISpinnerDataLoading=true;
},2000);



});

 }



 

}
