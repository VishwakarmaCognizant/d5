import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PublisherModel } from '../Model/PublisherModel';
import { Observable, map } from 'rxjs';
import { AuthorModel } from '../Model/AuthorModel';
import { BookModel } from '../Model/BookModel';
import { RegistrationModel, RegistrationResponse } from '../Model/RegistrationModel';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceModuleService {

  BaseUrl="https://localhost:7121/api/";

  constructor(private http:HttpClient) { }


  AddPublisherDetails(AddPublisher:PublisherModel):Observable<PublisherModel>
  {
    const publisherResult=new PublisherModel;
   return this.http.post(this.BaseUrl +"BookModuleAPI/AddNewPublisher",AddPublisher,{headers:({'Content-Type': 'application/json'})}).pipe(
map((data:any)=>{

  publisherResult.Code=data["code"];
  publisherResult.Remark=data["remark"];

  return publisherResult;
})

    )

  }


AddAuthor(AddAuthor:AuthorModel):Observable<AuthorModel>
{

  const authorDetails=new AuthorModel;

 return this.http.post(this.BaseUrl+"BookModuleAPI/AddAuthorName",AddAuthor,{headers:({'Content-Type':'application/json'})})
  .pipe(map((data:any)=>{

     
    authorDetails.Code=data["code"];
    authorDetails.Remark=data["remark"];
     
    return authorDetails;


  }))




}


AddBookDetails(addBookdetails:BookModel):Observable<BookModel>
{
  const BookDetailsResult=new BookModel;
 return this.http.post(this.BaseUrl+"BookModuleAPI/AddNewBook",addBookdetails,{headers:({'Content-Type':'application/json'})})
.pipe(map((data:any)=>{

  BookDetailsResult.code=data["code"];
  BookDetailsResult.remark=data["remark"];
  return BookDetailsResult;


}))



}



GetAuthorList():Observable<AuthorModel[]>
{

  const authorList:Array<AuthorModel>=[];


  return this.http.get(this.BaseUrl+"BookModuleAPI/AuthorList",{headers:({'Content-Type':'application/json'})}).pipe(
    map((data:any)=>{

for(const item in data)
{
  if(data.hasOwnProperty(item))
  {
    authorList.push(data[item]);
  }
}
return authorList;
    })
  );

}


GetPublisherList():Observable<PublisherModel[]>
{

  const authorList:Array<PublisherModel>=[];


  return this.http.get(this.BaseUrl+"BookModuleAPI/PublisherList",{headers:({'Content-Type':'application/json'})}).pipe(
    map((data:any)=>{

for(const item in data)
{
  if(data.hasOwnProperty(item))
  {
    authorList.push(data[item]);
  }
}
return authorList;
    })
  );

}

GetBookList():Observable<BookModel[]>
{

  const BookList:Array<BookModel>=[];


  return this.http.get(this.BaseUrl+"BookModuleAPI/BookList",{headers:({'Content-Type':'application/json'})}).pipe(
    map((data:any)=>{

for(const item in data)
{
  if(data.hasOwnProperty(item))
  {
    BookList.push(data[item]);
  }
}
return BookList;
    })
  );

}

GetUserDetailsById(UserId:any):Observable<RegistrationModel>
{
const UserDetails=new RegistrationModel;

return this.http.get(this.BaseUrl+"AdminAPI/UserDetailsById?UserId="+UserId,{headers:({'Content-Type':'application/json'})}).pipe(

  map((data:any)=>{


    UserDetails.Id=data["id"];
    UserDetails.Name=data["name"];
    UserDetails.LastName=data["lastName"];
    UserDetails.Address=data["address"];
    UserDetails.Email=data["emailId"];
    UserDetails.Mobile=data["mobile"];
    UserDetails.DOB=data["dateOfBirth"];
  return UserDetails;
  })

)
}

UpdateUserData(UserData:RegistrationModel):Observable<RegistrationResponse>
{
  const UserUpdateData=new RegistrationResponse;
 return this.http.post(this.BaseUrl+"AdminAPI/UpdateUserDetails",UserData,{headers:({'Content-Type':'application/json'})}).pipe(
map((data:any)=>{

  UserUpdateData.Message=data["message"];
  UserUpdateData.Response=data["response"];

return UserUpdateData;
})

  );
}



DeletUser(UserId:any):Observable<RegistrationResponse>
{
const UserDetails=new RegistrationResponse;

return this.http.get(this.BaseUrl+"AdminAPI/DeleteUserDetailsByid?UserId="+UserId,
{headers:({'Content-Type':'application/json'})}).pipe(

  map((data:any)=>{

    UserDetails.Message=data["code"];
    UserDetails.Response=data["remark"];
  return UserDetails;
  })

)
}

/* Author Page*/
getAuthorDetailsById(Id:any):Observable<AuthorModel>
{
const authorDetails=new AuthorModel();
return  this.http.get(this.BaseUrl +"BookModuleAPI/GetAuthorDetailsById?Id="+Id,{headers:({'Content-Type':'application/json'})}).pipe(
    map((data:any)=>{

      authorDetails.id=data["id"];
      authorDetails.authorName=data["authorName"];
      authorDetails.IsActive=data["IsActive"];

      return authorDetails;
    })
  )
}
UpdateAuthor(author:AuthorModel):Observable<AuthorModel>
{
const authorDetails=new AuthorModel();
return  this.http.put(this.BaseUrl +"BookModuleAPI/UpdateAuthorDetails",author,{headers:({'Content-Type':'application/json'})}).pipe(
    map((data:any)=>{

      authorDetails.Code=data["code"];
      authorDetails.Remark=data["remark"];

      return authorDetails;
    })
  )
}



DeleteAuthor(Id:any):Observable<AuthorModel>
{
const authorDetails=new AuthorModel();
return  this.http.delete(this.BaseUrl +"BookModuleAPI/DeleteAuthorDetails?Id="+Id,
{headers:({'Content-Type':'application/json'})}).pipe(
    map((data:any)=>{

      authorDetails.Code=data["code"];
      authorDetails.Remark=data["remark"];

      return authorDetails;
    })
  )
}


ActiveInActiveAuthorStatus(authorStatus:AuthorModel):Observable<AuthorModel>
{
const authorDetails=new AuthorModel();
return  this.http.put(this.BaseUrl +"BookModuleAPI/UpdateActiveInactiveStatus",authorStatus,
{headers:({'Content-Type':'application/json'})}).pipe(
    map((data:any)=>{

      authorDetails.Code=data["code"];
      authorDetails.Remark=data["remark"];

      return authorDetails;
    })
  )
}


GetPublisherDetailsById(PublisherId:any):Observable<PublisherModel>
{

  const publisherModel=new PublisherModel();


  return this.http.get(this.BaseUrl+"BookPublisherAPI/GetPublisherDetailsById?Id="+PublisherId,
  {headers:({'Content-Type':'application/json'})})
  .pipe(map((data:any)=>{


    publisherModel.ContactNo=data["ContactNo"];
    publisherModel.PublisherAddress=data["PublisherAddress"];
    publisherModel.publisherName=data["PublisherName"];
    publisherModel.id=data["Id"];


  return publisherModel;

  }));
}


UpdatePublisher(Publisher:PublisherModel):Observable<PublisherModel>
{

  const publisherModel=new PublisherModel();


  return this.http.put(this.BaseUrl+"BookPublisherAPI/UpdatePublisherDetails",Publisher,
  {headers:({'Content-Type':'application/json'})})
  .pipe(map((data:any)=>{

    
    publisherModel.Code=data["code"];
    publisherModel.Remark=data["remark"]; 


  return publisherModel;

  }));
}


DeletePublisher(PublisherId:any):Observable<PublisherModel>
{

  const publisherModel=new PublisherModel();

  return this.http.delete(this.BaseUrl+"BookPublisherAPI/DeletePublisher?Id="+PublisherId,
  {headers:({'Content-Type':'application/json'})})
  .pipe(map((data:any)=>{

    
    publisherModel.Code=data["code"];
    publisherModel.Remark=data["remark"];

    return publisherModel;

  }));
  
}




}
