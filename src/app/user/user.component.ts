import { Component, OnInit } from '@angular/core';
import { UserServiceModuleService } from '../Services/user-service-module.service';
import { UserLoginDetailsModel } from './UserModel/UserLoginDetailsModel';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
 UserDetails=new UserLoginDetailsModel;

constructor(private userService:UserServiceModuleService){

}
  
  ngOnInit(): void {
 
this.UserGetDetails();

  }

  UserGetDetails()
  {
const userLoginDetailsById=new UserLoginDetailsModel();

userLoginDetailsById.Id=sessionStorage.getItem("Id") as string;



this.userService.UserLoginDetails(userLoginDetailsById).subscribe(resp=>{

  
this.UserDetails=resp;
  
});


  }

  
  
}
