import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {
 amnt:any;
 desp:any;
 desp2:any;
 exAmnt:any;
 myIncomeDate:any;
 myExpenseDate:any;
  ngOnInit(): void { 
  }
  sendIncome(desc, amount, incomeDate){
    this.desp= desc.value;
    this.amnt = amount.value;  
    this.myIncomeDate = incomeDate.value;
  }
   sendExpense(desc2, expense, expenseDate){
    this.desp2= desc2.value;
    this.exAmnt=expense.value;
    this.myExpenseDate = expenseDate.value;
  } 
} 
 