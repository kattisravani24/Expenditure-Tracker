import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendRecordsService { 
  private sub = new Subject<any>();

  constructor() { }

  sendTransaction(record: {user:string, desc:string, income:number, expense:number, date:any}){
    this.sub.next(record);
  }

  /* sendExpenseRecord(record: {user:string, desc:string, income:number, expense:number, date:any}){
    this.sub.next(record);
  } */

  getTransaction(): Observable<any>{
    return this.sub.asObservable();
  }

  /* getExpenseRecord(): Observable<any>{
    return this.sub.asObservable();
  } */
}
