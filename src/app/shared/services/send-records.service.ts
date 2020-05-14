import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SendRecordsService { 
  private sub = new Subject<any>();

  constructor() { }
  /**
   * To send one complete transaction
   * @param record - to store one transaction
   */
  sendTransaction(record: {user:string, desc:string, income:number, expense:number, date:any}){
    this.sub.next(record); 
  }

  /**
   * To get a transaction
   */
  getTransaction(): Observable<any>{
    return this.sub.asObservable();
  }
}
