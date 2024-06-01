import { Component, OnInit } from '@angular/core';
import { AuthorModel } from 'src/app/Model/AuthorModel';
import { PublisherModel } from 'src/app/Model/PublisherModel';
import { AdminServiceModuleService } from 'src/app/Services/admin-service-module.service'; 
import { FormBuilder, Validators } from '@angular/forms'; 
import { BookModel } from 'src/app/Model/BookModel';
import { MatTableDataSource } from '@angular/material/table';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
declare let alertify:any;

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public ISpinnerSaveData:boolean=false;
  public ISpinnerDataLoading:boolean=false;
  
  AuthorList:Array<AuthorModel>=[];
  Publisherlist:Array<PublisherModel>=[];
  BookListDetails:Array<BookModel>=[];
  UploadBookImage="";



  displayedColumns: string[] = ["Sno",'bookName', 'bookTitle','bookDescription','authorName','publishName','contactNumber' ,'Action'];
  dataSource = new MatTableDataSource<BookModel>(this.BookListDetails)

  constructor(private addBookService:AdminServiceModuleService,private formBuilder:FormBuilder) {


   }

  ngOnInit(): void {
    this.GetBookListDetails();
    this.GetAuthorList();
    this.GetPublisherList();

    this.UploadBookImage="./assets/BookImage.png";

  }

  BookFormRegistration=this.formBuilder.group({
    "BookName":["",Validators.required],
    "BookTitle":["",Validators.required],
    "BookDescription":["",Validators.required],
    "AuthorId":["",Validators.required],
    "PublisherId":["",Validators.required]
  });




  GetAuthorList()
  {
 this.addBookService.GetAuthorList().subscribe(resp=>{
 
 this.AuthorList=resp;

 });
 
  }

  GetPublisherList()
  {
    this.addBookService.GetPublisherList().subscribe(reps=>{

  this.Publisherlist=reps;

    });
  }


  AddBookDetails()
  {

    this.ISpinnerSaveData=true;
const AddNewBook=new BookModel;
AddNewBook.authorId=this.BookFormRegistration.get("AuthorId")?.value;
AddNewBook.publisherId=this.BookFormRegistration.get("PublisherId")?.value;
AddNewBook.bookName=this.BookFormRegistration.get("BookName")?.value;
AddNewBook.bookTitle=this.BookFormRegistration.get("BookTitle")?.value;
AddNewBook.bookDescription=this.BookFormRegistration.get("BookDescription")?.value;

this.addBookService.AddBookDetails(AddNewBook).subscribe(resp=>{

  console.log(resp);

  if(resp.code=="1")
  {

 alertify.success(resp.remark);
 this.ISpinnerSaveData=false;
 this.BookFormRegistration.reset();
 this.GetBookListDetails();

  }
 else
  {
    alertify.error(resp.remark);
    this.ISpinnerSaveData=false;
    this.GetBookListDetails();
  }


});


    console.log(this.BookFormRegistration.value);
  }



  GetBookListDetails()
  {
this.addBookService.GetBookList().subscribe(resp=>{




setTimeout(()=>{

  this.BookListDetails=resp;

console.log(this.BookListDetails);


},2000);

setTimeout(()=>{

  this.ISpinnerDataLoading=true;

},2000);


});


  }


  UploadBookImageurl(event:any)
{

if(event.target.files)
{
  var  reader=new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload=(event:any)=>{

this.UploadBookImage=event.target.result;

  }

}


}


}
