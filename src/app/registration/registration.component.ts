import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRoutingModule } from '../user/user-routing.module';
import { RegistrationModel } from '../Model/RegistrationModel';
import { LoginServicesService } from '../Services/login-services.service';
import { Router } from '@angular/router';
import { publicDecrypt } from 'crypto';
import { Interface } from 'readline';
import { ICityModel } from '../Model/ICityModel';

declare let alertify:any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent implements OnInit {

  public City:ICityModel[]=[

    {CityCode:"IND",CityName:"India"},
    {CityCode:"USA",CityName:"USA"},
    {CityCode:"CHN",CityName:"China"}

  ];



  constructor(private formBuilder:FormBuilder,private userRegistrationService:LoginServicesService,
    private router:Router
    ) { }
  ngOnInit(): void {
  
  }
  
 

RegistrationForm=this.formBuilder.group({
 
Password:['',Validators.required],
Mobile:['',Validators.required],
Address:['',Validators.required],
DateOfBirth:['',Validators.required],
EmailId:['',Validators.required],
FirstName:['',Validators.required],
LastName:['',Validators.required]

});



UserRegistration()
{



 const registernewuser=new RegistrationModel();
 registernewuser.Name=this.RegistrationForm.get('FirstName')?.value;
 registernewuser.LastName=this.RegistrationForm.get('LastName')?.value;
//  registernewuser.UserName=this.RegistrationForm.get('UserName')?.value;
 registernewuser.Password=this.RegistrationForm.get('Password')?.value;
 registernewuser.Mobile=this.RegistrationForm.get('Mobile')?.value;
 registernewuser.Address=this.RegistrationForm.get('Address')?.value;
 registernewuser.DOB=this.RegistrationForm.get('DateOfBirth')?.value;
 registernewuser.Email=this.RegistrationForm.get('EmailId')?.value;

this.userRegistrationService.UserRegistration(registernewuser).subscribe(resp=>{

  console.log(resp);
  if(resp.Message=="success")
  {
alertify.success(resp.Response);

this.router.navigateByUrl("/");

  }
  else
  {
    alertify.alert("",resp.Response);
  }


});



  console.log(registernewuser);
}



}

