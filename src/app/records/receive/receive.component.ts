import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/app/shared/services/records.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {
  receivedRecords: {desc:string, amount:number, exAmount:number, date:any}[] = [];
  subscription: Subscription;
  income:boolean = false;
  expense:boolean = false;
  recordIncome: any[] = [];

  constructor(private recordServices: RecordsService) { 
    this.subscription = this.recordServices.getRecord().subscribe(record =>{
      if(record){
        this.receivedRecords.push(record);
      }
      for(var i = 0; i < this.receivedRecords.length; i++){
        if(this.receivedRecords[i].exAmount == 0){
          this.expense = true;
        }
        if(this.receivedRecords[i].amount == 0){
          this.income = true;
        } 
      } 
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
  }
}
