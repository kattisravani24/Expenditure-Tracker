import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.css']
})
export class TrackertableComponent implements OnInit {
  /* @Input() receivedDesc:string;
  @Input() receivedAmount:number; */

  @Input() receivedDesc:any;
  @Input() receivedAmount:any;

  records:{desc:string, amount:number}[]

  ngOnChanges() {
    this.records.push(this.receivedDesc, this.receivedAmount);
  }

  ngOnInit(){ 
    
  }

  

}
