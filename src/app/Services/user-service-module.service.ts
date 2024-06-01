import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserLoginDetailsModel } from '../user/UserModel/UserLoginDetailsModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceModuleService {


  BaseUrl="https://localhost:7121/api/";
  constructor(private httlClient:HttpClient) { 


  }



  UserLoginDetails(UserLoginParametor:UserLoginDetailsModel):Observable<UserLoginDetailsModel>
  {

   

   const UserLogindetailsModel=new UserLoginDetailsModel();
   return this.httlClient.post(this.BaseUrl+"LoginAPI/UserLoginDetails",JSON.stringify(UserLoginParametor),
    {headers : ({'Content-Type': 'application/json',Authorization:sessionStorage.getItem("Token") as string
})}
    
    ).pipe(
      map((data:any)=>{

 
        UserLogindetailsModel.Address=data["address"];
        UserLogindetailsModel.CreationDate=data["creationDate"];
        UserLogindetailsModel.DateOfBirth=data["dateOfBirth"];
        UserLogindetailsModel.EmailId=data["emailId"];
        UserLogindetailsModel.FirstName=data["firstName"];
        UserLogindetailsModel.Id=data["id"];
        UserLogindetailsModel.LastName=data["lastName"];
        UserLogindetailsModel.Mobile=data["mobile"];
        UserLogindetailsModel.UserType=data["userType"];
        



return UserLogindetailsModel;
      })
    );


  }


}
