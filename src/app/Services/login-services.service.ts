import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, UserLoginDetails } from '../Model/LoginModel';
import { RegistrationModel, RegistrationResponse } from '../Model/RegistrationModel';
import { Observable, map, observable } from 'rxjs';
import { IUserListModel, UserListModel } from '../Model/UserListModel';
import { AnyForUntypedForms } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { CourseModel } from '../Model/CourseModel';



@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

   BaseUrl="https://localhost:7121/api/";
  
    Courses !:CourseModel[];
 


  constructor(private httpClient:HttpClient) {

   }

   Login(login:LoginModel):Observable<UserLoginDetails>
   {

     return this.httpClient.post(this.BaseUrl+"LoginAPI/LoginUser",login).pipe(
    map((data:any)=>{

  const userlogindetails=new UserLoginDetails();

  
userlogindetails.Mobile=data["mobile"];
userlogindetails.FullName=data["fullName"];
userlogindetails.Gender=data["gender"];
userlogindetails.Address=data["address"];
userlogindetails.CreatedDate=data["createdDate"];
userlogindetails.Response=data["response"];
userlogindetails.Remark=data["remark"];
userlogindetails.Code=data["code"];
userlogindetails.Token=data["token"];
userlogindetails.UserType=data["userType"];

return userlogindetails;

})


     );
   }

   UserRegistration(registration:RegistrationModel):Observable<RegistrationResponse>
   {

    return this.httpClient.post(this.BaseUrl+"UserRegistrationAPI/UserRegistration",registration).pipe(
map((data:any)=>{
const registrationResponse=new RegistrationResponse();

console.log(data);

registrationResponse.Message=data["message"];
registrationResponse.Response=data["response"];

return registrationResponse;

})

    );
   }


   UserListDetails(SearchByDateWise:UserListModel):Observable<UserListModel[]>
   {
    
 
    const userlistDetails:Array<UserListModel>=[];



return this.httpClient.post(this.BaseUrl+"UserRegistrationAPI/UserListDetails",JSON.stringify(SearchByDateWise),
 {headers : ({'Content-Type': 'application/json',Authorization:"Bearer "+sessionStorage.getItem("Token") as string
})}).pipe(
  map((data:any)=>{

  

for(const item in data)
{

  if(data.hasOwnProperty(item))
  {
    userlistDetails.push(data[item]);
  }
}
return userlistDetails;

}))

   }


    GetDecoderAccessToken(token:any)
    {
     try
    {
      return jwtDecode(token);
    }
    catch(Error)
    {
     return null;
     }

    }
  
    CoursesList():CourseModel[]
    {
      
 
      this.Courses=[
        {id:1, Description:"Which course is best to become a teacher in India?",ImageURL:"../assets/TeacherImage.jpeg",
        LongDescription:" Teaching is termed the best profession in India. "},
        {id:2,Description:"Which course is best for govt teacher?",ImageURL:"../assets/TeacherImage.jpeg",LongDescription:"In the teaching profession"},
        {id:3,Description:"Who is the India No 1 teacher?",ImageURL:"../assets/TeacherImage.jpeg",LongDescription:"There are a lot of teachers in India who have made."},
        {id:4,Description:"Which teacher is in demand?",ImageURL:"../assets/TeacherImage.jpeg",LongDescription:"Teacher's never go out of demand. Till the end of human."},
        {id:5,Description:"What is the salary of a Ctet teacher?",ImageURL:"../assets/TeacherImage.jpeg",LongDescription:" It depends on which school the teacher is posted."},
        {id:6,Description:"How to become a Teacher in India?",ImageURL:"../assets/TeacherImage.jpeg",LongDescription:"In India, teaching is the best profession "},
        {id:7,Description:"How to Become a Teacher after 10th?",ImageURL:"../assets/TeacherImage.jpeg",LongDescription:"To get enrolled for a teaching course the minimum."},
        {id:8,Description:"Why a Teacher is important?",ImageURL:"../assets/TeacherImage.jpeg",LongDescription:"A Teacher is important because they play a crucial role in."}
    
    ];
  
    return this.Courses;
    }


}
