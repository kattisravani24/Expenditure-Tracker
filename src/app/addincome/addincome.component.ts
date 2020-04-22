import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {
  @Output() enteredDesc = new EventEmitter();
  @Output() enteredAmount = new EventEmitter();
  
  ngOnInit(): void {
  }
  disabled: 'cursor:'
  sendDetails(desc, amount){
    this.enteredDesc.emit(desc.value);
    this.enteredDesc.emit(amount.value);
    console.log(this.enteredDesc, this.enteredAmount);
    console.log(desc.value, amount.value);
  }

} 
