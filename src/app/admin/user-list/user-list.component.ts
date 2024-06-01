import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UserListModel } from 'src/app/Model/UserListModel';
import { LoginServicesService } from 'src/app/Services/login-services.service';
import { AdminServiceModuleService } from 'src/app/Services/admin-service-module.service';
import { EditUserComponent } from '../edit-user/edit-user.component';

declare let alertify : any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'Admin Module';
  FullName:any;
  UserType:any;
  public IsLoadData:boolean=false;
 displayedColumns: string[] = ["sno",'name', 'lastName', 'mobile','dateOfBirth','address','userType','Action'];


 UserListDetails:Array<UserListModel>=[];


 dataSource = new MatTableDataSource<UserListModel>(this.UserListDetails);

 @ViewChild(MatPaginator)  paginator!: MatPaginator;

@ViewChild(MatSort) sort!: MatSort;

 constructor(private http:HttpClient,private loginservice:LoginServicesService,public dialog:MatDialog,
   private adminService:AdminServiceModuleService
   ){


 }
 ngOnInit(): void {

  this.GetUserList();

 
  this.FullName= sessionStorage.getItem("UserName"); 
  
  this.UserType= sessionStorage.getItem("UserType"); 

  this.dataSource.sort=this.sort;    
  this.dataSource.paginator = this.paginator;
 }

 applyFilter(addfilter:string)
 {
  alertify(addfilter);
   this.dataSource.filter=addfilter.trim().toLowerCase();
 }


 GetUserList()
 {
   const userSearchByDateWise=new UserListModel;


  this.loginservice.UserListDetails(userSearchByDateWise).subscribe(resp=>{



setTimeout(()=>{

 this.UserListDetails=resp;
 

},2000)

setTimeout(()=>{
 this.IsLoadData=true;
},2000)

  });



 }

 EditUser(id:any)
 {
   
   this.dialog.open(EditUserComponent,{data:{UserId:id}});

   this.GetUserList();
 }
 DeleteUser(id:any)
 {
   if(confirm("Are Sure To Delete this item ?"))
   {
     this.adminService.DeletUser(id).subscribe(resp=>{

       if(resp.Message=="1")
       {
       alertify.success(resp.Response);
       this.GetUserList();
       }
       else
       {
         alertify.error(resp.Response);
       }
       
           });
   }



 }


}


