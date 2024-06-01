import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../Model/LoginModel';
import { LoginServicesService } from '../Services/login-services.service';
declare let alertify: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private route:Router,private loginservices:LoginServicesService) {

   }

  ngOnInit(): void {
  }

   loginForm=this.formBuilder.group(
    {
  LoginId:['',[Validators.required]],
  Password:['',[Validators.required]]

   });


   Login()
   {
    console.log(this.loginForm.value);




    const UserLogin=new LoginModel();

    UserLogin.Login=this.loginForm.get('LoginId')?.value;
    UserLogin.Password=this.loginForm.get('Password')?.value;


 this.loginservices.Login(UserLogin).subscribe(resp=>{
 

  if(resp.Response=="success")
  {

    const UserInfo:any=this.loginservices.GetDecoderAccessToken(resp.Token as string);
    
    const name = UserInfo.FullName;
    const id = UserInfo.Id;
    const UserType = UserInfo.UserType=="1"?"Admin":"User";
   sessionStorage.setItem("UserName",name); 
   sessionStorage.setItem("UserType",UserType); 
   sessionStorage.setItem("Id",id);

  
  
   
  }
  if(resp.Response=="success" && resp.UserType=="1")
  {

     
    sessionStorage.setItem("Token",resp.Token as string);
    this.route.navigateByUrl("/Admin/Admin");
    alertify.success("successfully Admin login");

  }
 else if(resp.Response=="success" && resp.UserType=="2")
 {
  
  sessionStorage.setItem("Token",resp.Token as string);
  this.route.navigateByUrl("/User/User");

  alertify.success("successfully user login");
 }
else
{
   
  alertify.alert("","Invalid LoginId or Password");
  
}

});

 
   }



   get loginid()
   {
    return this.loginForm.get('LoginId') as FormControl;

   }
    get Password()
   {
    return this.loginForm.get('Password') as FormControl;
    
   }

}
