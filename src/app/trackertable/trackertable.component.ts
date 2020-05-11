import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { RecordsService } from '../shared/services/records.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.css']
})
export class TrackertableComponent implements OnInit, OnChanges {
  subscription: Subscription;
  receivedValues:any[] = [];
  constructor(private recordServices: RecordsService) { 
    this.subscription = this.recordServices.getSelectedValues().subscribe(data => {
      if(data){
        this.receivedValues.push(data);
      }
    })
  }

  @Input() amount:any 
  @Input() description:any
  @Input() expenseAmount:any 
  @Input() description2:any
  @Input() incomeDate:any 
  @Input() expenseDate:any
  @Input() inUser:any;
  @Input() exUser:any;

  draft:boolean = false;
  yippee:boolean;
  incomeArr:any[] = [];
  uniqueIncomeArr:any[] =[];
  expenseArr:any[] = [];
  uniqueExpenseArr:any[] =[];
  totalIncome:any;
  totalExpense:any;
  totalSaving:any;
  temp = 0.00;
 
  records:{desc:string, amount:number, exAmount:number, date:any, user:any}[] = [];

  ngOnInit(){ }
  ngOnChanges() {

    // Checking for the description, income and expense and pushing the values in to the table
    if(this.amount && this.description && this.incomeDate){
      this.records.push({desc:this.description, amount:this.amount, exAmount:this.temp, date:this.incomeDate, 
        user:this.inUser});
      this.amount='';
      this.description=''; 
    }
    else if(this.expenseAmount && this.description2 && this.expenseDate){
      this.records.push({desc:this.description2, amount:this.temp, exAmount:this.expenseAmount, date:this.expenseDate, user:this.exUser});
    }
    
    //Pushing income values to income array
    for(var i = 0; i < this.records.length; i++){
      this.incomeArr.push(this.records[i].amount);
    } 
    // Removing Dulpicate Incomes 
    for (var j = 0; j < this.incomeArr.length; j++) {
      if (this.uniqueIncomeArr.indexOf(this.incomeArr[j]) == -1) {
        this.uniqueIncomeArr.push(this.incomeArr[j]);
      } 
    }
    //Adding Unique Incomes
    this.totalIncome = this.uniqueIncomeArr.reduce(function(a, b){
      return Number(a) + Number(b);
      }, 0);
    //Pushing expense values to expense array
    for(var e = 0; e < this.records.length; e++){
      this.expenseArr.push(this.records[e].exAmount);
    } 
    // Removing Dulpicate Expenses 
    for (var k = 0; k < this.expenseArr.length; k++) {
      if (this.uniqueExpenseArr.indexOf(this.expenseArr[k]) == -1) {
        this.uniqueExpenseArr.push(this.expenseArr[k]);
      } 
    }
    //Adding Unique Expenses
    this.totalExpense = this.uniqueExpenseArr.reduce(function(c, d){
      return Number(c) + Number(d);
      }, 0); 

    this.totalSaving = this.totalIncome - this.totalExpense;

    if((this.totalIncome - this.totalExpense) < 0){
      this.draft = true;
    }else{
      this.draft = false;
    }
    /* else if((this.totalIncome - this.totalExpense) > 0 && (this.totalIncome - this.totalExpense) != 0){
      this.yippee = true;
    } */
  }
  sendRecords(){
    this.recordServices.sendRecords(this.records);
  } 


}