import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  constructor() { }
  private subject = new Subject<any>();

  sendRecords(records: {name:string, age:number}[]){
    this.subject.next(records);
  } 

  getRecord(): Observable<any>{
    return this.subject.asObservable();
  }
} 
