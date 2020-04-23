import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {

 amnt:any;
 desp:any;
  
  ngOnInit(): void {
  }

  disabled: 'cursor:'
  sendDetails(desc, amount){
    this.amnt = amount.value;
    this.desp= desc.value;
  }
} 
 