import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.css']
})
export class TrackertableComponent implements OnInit, OnChanges {
  @Input() amount:any
  @Input() description:any
 @Input() expenseAmount:any
 @Input() description2:any
  
  temp:any ='-';
  records:{desc:string, amount:number, exAmount:number}[] = [];

  ngOnChanges() {
    if(this.amount && this.description){
      this.records.push({desc:this.description, amount:this.amount, exAmount:this.temp});
      console.log(this.records);
      this.amount='';
      this.description='';
    }
    else if(this.expenseAmount && this.description2 ){
      this.records.push({desc:this.description2, amount:this.temp, exAmount:this.expenseAmount});
      console.log(this.records);
    }

    
  }
  ngOnInit(){ 
    
  }
}
