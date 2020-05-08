import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  constructor() { }
  private subject = new Subject<any>();

  sendRecords(record:{desc:string, amount:number, exAmount:number, date:any}[]){
    this.subject.next(record);
  } 

  getRecord(): Observable<any>{
    return this.subject.asObservable();
  }
} 
