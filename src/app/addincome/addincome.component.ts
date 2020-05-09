import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem} from 'primeng/api';
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
 myIncomeUser:any;
 myExpenseUser:any;

//  value: Date;

users: SelectItem[];
selectedUser: SelectItem;
incomeForm:FormGroup;
expenseForm:FormGroup;

 constructor() {
    this.users = 
    [
      {label: "(Select User)", value: "Select User"},
      {label: 'Ahemmed', value: 'Ahemmed'},
      {label: 'Dileep', value: 'Dileep'},
      {label: 'Suman', value: 'Suman'},
      {label: 'Malathi', value: 'Malathi'}
    ];
  }

  ngOnInit(): void { 

    this.incomeForm = new FormGroup({
      incomeDescription: new FormControl('',Validators.required),
      incomeAmount: new FormControl('', Validators.required),
      validateIncomeDate:new FormControl('', Validators.required),
      validateIncomeUser: new FormControl('',Validators.required)
    })
    this.expenseForm = new FormGroup({
      expenseDescription: new FormControl('',Validators.required),
      expenseAmount: new FormControl('', Validators.required),
      validateExpenseDate: new FormControl('', Validators.required)
    })
  }
  get incomeDescription(){
    return this.incomeForm.get('incomeDescription');
  }
  get incomeAmount(){
    return this.incomeForm.get('incomeAmount');
  }
  get validateIncomeDate(){
    return this.incomeForm.get('validateIncomeDate');
  }
  get validateIncomeUser(){
    return this.expenseForm.get('validateIncomeUser');
  } 
  get expenseDescription(){
    return this.expenseForm.get('expenseDescription');
  }
  
  get expenseAmount(){
    return this.expenseForm.get('expenseAmount');
  }
  get validateExpenseDate(){
    return this.expenseForm.get('validateExpenseDate');
  }

  sendIncome(desc, amount, incomeDate, incomeUser){
    this.desp= desc.value;
    this.amnt = amount.value;  
    this.myIncomeDate = incomeDate.value;
    this.myIncomeUser = incomeUser.value;
  }
   sendExpense(desc2, expense, expenseDate, expenseUser){ 
    this.desp2= desc2.value;
    this.exAmnt=expense.value;
    this.myExpenseDate = expenseDate.value;
    this.myExpenseUser = expenseUser.value;
  } 
} 