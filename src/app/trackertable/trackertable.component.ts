import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../shared/services/records.service';
import { Subscription } from 'rxjs';
import { SendRecordsService } from '../shared/services/send-records.service';

@Component({
  selector: 'trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.css']
})
export class TrackertableComponent implements OnInit {
  subscription: Subscription;

  constructor(private recordServices: RecordsService, public receiveRecord: SendRecordsService) { }

  records:{ user:string, desc:string, income:number, expense:number, date:any}[] = [];
  incomes: number[] = [];
  expenses: number[] = [];
  totalIncome: number = 0.0;
  totalExpense:number = 0.0;
  savings: number = 0.0;
  draft:boolean = false;

  ngOnInit(){ 
    /**
     * Subscribing to recieve record service and getting the transaction values
     */
    this.subscription = this.receiveRecord.getTransaction().subscribe(val => {
      if(val){
        this.records.push(val);
        this.incomes.push(val.income);
        this.expenses.push(val.expense);
      }else{
        this.records = [];
      } 
      //Calculating total income 
      this.totalIncome = this.incomes.reduce(function(a, b){
        return Number(a) + Number(b);
        }, 0);
      //Calculating total expenses 
      this.totalExpense = this.expenses.reduce(function(a, b){
        return Number(a) + Number(b);
        }, 0);
      // Calculating total saving
      this.savings = this.totalIncome - this.totalExpense;
      // If saving is less than 0 showing warning message to the user
      if(this.savings < 0){
        this.draft = true;
      }
    })
  }
}