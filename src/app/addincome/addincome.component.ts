import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

 value: Date;

 incomeForm:FormGroup;
 expenseForm:FormGroup;
  ngOnInit(): void { 
    this.incomeForm = new FormGroup({
      incomeDescription: new FormControl('',Validators.required),
      incomeAmount: new FormControl('', Validators.required),
      incomeDate:new FormControl('', Validators.required)
    })

    console.log(this.incomeForm);

    this.expenseForm = new FormGroup({
      expenseDescription: new FormControl('',Validators.required),
      expenseAmount: new FormControl('', Validators.required),
      expenditureDate: new FormControl('', Validators.required)
    })

    console.log(this.expenseForm);
  }
  get incomeDescription(){
    return this.incomeForm.get('incomeDescription');
  }
  get incomeAmount(){
    return this.incomeForm.get('incomeAmount');
  }
  get incomeDate(){
    return this.incomeForm.get('incomeDate');
  }
  get expenseDescription(){
    return this.expenseForm.get('expenseDescription');
  }
  get expenseAmount(){
    return this.expenseForm.get('expenseAmount');
  }
  get expenditureDate(){
    return this.expenseForm.get('expenditureDate');
  }

  sendIncome(desc, amount, incomeDate){
    this.desp= desc.value;
    this.amnt = amount.value;  
    this.myIncomeDate = incomeDate.value;
    //console.log(this.desp, this.amnt, this.myIncomeDate);
  }
   sendExpense(desc2, expense, expenseDate){ 
    this.desp2= desc2.value;
    this.exAmnt=expense.value;
    this.myExpenseDate = expenseDate.value;
    //console.log(this.desp2, this.exAmnt, this.myExpenseDate);
  } 
} 