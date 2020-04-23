import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.css']
})
export class TrackertableComponent implements OnInit, OnChanges {
  @Input()
  amount:any

  @Input()
  description:any

  records:{desc:string, amount:number}[] = [];

  ngOnChanges() {
    if(this.amount && this.description){
      this.records.push({desc:this.description, amount:this.amount});
      console.log(this.records);
    }
  }
  ngOnInit(){ 
    
  }
}
