import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem} from 'primeng/api';
import { SendRecordsService } from '../shared/services/send-records.service';
import { BackendService } from '../shared/services/backend.service';
@Component({
  selector: 'addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {
users: SelectItem[];
selectedUser: SelectItem;
incomeForm:FormGroup;
expenseForm:FormGroup;
 constructor(private transaction: SendRecordsService, private service: BackendService) { }
  ngOnInit(): void {
    this.users = 
    [
      {label: "(Select User)", value: "Select User"},
      {label: 'Ahemmed', value: 'Ahemmed'},
      {label: 'Dileep', value: 'Dileep'},
      {label: 'Suman', value: 'Suman'},
      {label: 'Malathi', value: 'Malathi'}
    ];
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
  sendIncome(desc, amount, incomeDate, incomeUser){
    this.transaction.sendTransaction({user: incomeUser.value, desc: desc.value, income: amount.value, expense: 0.0, date: incomeDate.value});
    this.service.getTableData().subscribe(data => {
      console.log(data);
    }) 
    let test = 
    {
      "fields": 
      { 
        "type": { "stringValue": "test-api" }, 
        "income": { "stringValue": "amount" }, 
        "expenditure": { "stringValue": "0.0" }, 
        "description": { "stringValue": "desc" },
        "username": {"stringValue": "incomeUser"}
        }
    }
    this.service.saveData(test).subscribe(data => {
      console.log(data);
    })
  }
  sendExpense(desc2, expense, expenseDate, expenseUser){ 
    this.transaction.sendTransaction({user: expenseUser.value, desc: desc2.value, expense: expense.value, income: 0.0, date: expenseDate.value});
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
} 