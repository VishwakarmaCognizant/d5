import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

//  public SubjectData=new Subject<string>();
 public SubjectData=new BehaviorSubject<string>("Hi");

  constructor() { }

  GetData(data:any)
  {

    this.SubjectData.next(data);
  }

}
