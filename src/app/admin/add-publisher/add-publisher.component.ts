import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PublisherModel } from 'src/app/Model/PublisherModel';
import { AdminServiceModuleService } from 'src/app/Services/admin-service-module.service';
import { EditPublisherComponent } from '../edit-publisher/edit-publisher.component';
declare let alertify: any;
@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {

  public ISpinnerDataLoading:boolean=false;
  public ISpinnerSaveData:boolean=false;

  Publisherlist:Array<PublisherModel>=[];
  dataSource = new MatTableDataSource<PublisherModel>(this.Publisherlist)

   displayedColumns: string[] = ["Sno",'Publisher Name', 'Address','Contact No','Creation Date', 'Action'];
  constructor(private publisherService:AdminServiceModuleService,private formBuilder:FormBuilder,
    public dialog:MatDialog) { }

  ngOnInit(): void {
    this.GetPublisherList();
  }

  PublisherForm=this.formBuilder.group({
"PublisherName":["",Validators.required],
"Address":["",Validators.required],
"ContactNo":["",Validators.required]

  });


  EditPublisherDetails(id:any)
  {
    this.dialog.open(EditPublisherComponent,{data:{Id:id}});
  }

  SavePublisherDetails()
  {

    this.ISpinnerSaveData=true;

const publisherForm=new PublisherModel();

publisherForm.publisherName=this.PublisherForm.get("PublisherName")?.value;
publisherForm.PublisherAddress=this.PublisherForm.get("Address")?.value;
publisherForm.ContactNo=this.PublisherForm.get("ContactNo")?.value;

this.publisherService.AddPublisherDetails(publisherForm).subscribe(resp=>{
if(resp.Code=="1")
{
  alertify.success(resp.Remark);
  this.PublisherForm.reset();
  this.ISpinnerSaveData=false;
  this.GetPublisherList();
}
else
{
  alertify.error(resp.Remark);
  this.ISpinnerSaveData=false;
  this.GetPublisherList();
}


});

//this.ISpinnerSaveData=false;



  }

  GetPublisherList()
  {
    this.publisherService.GetPublisherList().subscribe(reps=>{




setTimeout(()=>{
  this.Publisherlist=reps;
},1000);

setTimeout(()=>{
 this.ISpinnerDataLoading=true;
},1000)



    });
  }


}
