import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private subject = new Subject<any>();
  constructor() { }
  sendFilteredValues(values: string[]){
    this.subject.next(values);
  }

  getFilteredValues(): Observable<any>{
    return this.subject.asObservable();  
  }
}
 