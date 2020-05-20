import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})
export class BackendService {

  url:string = 'https://firestore.googleapis.com/v1/projects/api-demo-f75ef/databases/(default)/documents/records';

  constructor(private http:HttpClient) { }

  getTableData(){
    return this.http.get(this.url);
  }

  saveData(reqObj){
    return this.http.post(this.url, reqObj);
  }
}
