import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LoginServicesService } from '../Services/login-services.service';
import {  UserListModel } from '../Model/UserListModel';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminServiceModuleService } from '../Services/admin-service-module.service';
import { merge, tap } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
declare let alertify : any;

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,AfterViewInit {
  title = 'Admin Module';
   FullName:any;
   UserType:any;
   public IsLoadData:boolean=false;
  displayedColumns: string[] = ["Select","sno",'name', 'lastName', 'mobile','dateOfBirth','address','userType','Action'];

 
  UserListDetails:Array<UserListModel>=[];

  isexpandable !:UserListModel;

 selection=new SelectionModel<UserListModel>(true,[]);

  dataSource = new MatTableDataSource<UserListModel>(this.UserListDetails);

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

 @ViewChild(MatSort) sort!: MatSort;
 

  constructor(private http:HttpClient,private loginservice:LoginServicesService,public dialog:MatDialog,
    private adminService:AdminServiceModuleService
    ){


  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0);

    merge(this.sort.sortChange,this.paginator.page)

   .pipe(
    tap(()=>this.GetUserList())
   ).subscribe();
  }

  ngOnInit(): void {

   this.GetUserList();

 
   this.FullName= sessionStorage.getItem("UserName"); 
   
   this.UserType= sessionStorage.getItem("UserType"); 

   this.dataSource.sort=this.sort;    
   this.dataSource.paginator = this.paginator;
  }

  onLessionToggle(lession:UserListModel)
  {

    this.selection.toggle(lession);
    console.log(this.selection.selected);
  }

isSelectAll()
{
  return this.selection.selected?.length==this.UserListDetails?.length;
}

isAllSelect()
{
  if(this.isSelectAll())
  {
    this.selection.clear();
  }
  else
  {
    this.selection.select(...this.UserListDetails);
  }
}
  onTogglelession(lession:UserListModel)
  {

    if(lession==this.isexpandable)
    {
      this.isexpandable;
    }
    else
    {
      this.isexpandable=lession;
    }
  }

  applyFilter(addfilter:string)
  {
    alert(JSON.stringify(addfilter));
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
    const config=new MatDialogConfig();
    config.disableClose=true;
    config.autoFocus=true;
    config.data={
      UserId:id
    }

    // this.dialog.open(EditUserComponent,{data:{UserId:id}});
    const dialogRef= this.dialog.open(EditUserComponent,config);

    this.GetUserList();

    return dialogRef.afterClosed();
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
