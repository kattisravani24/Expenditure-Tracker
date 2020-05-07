import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/app/shared/services/records.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {
  /* receivedRecords: {name: string, age: number}[];
  subscription: Subscription;

  constructor(private recordServices: RecordsService) { 
    this.subscription = this.recordServices.getRecord().subscribe(record =>{
      if(record){
        this.receivedRecords.push(record);
        console.log(this.receivedRecords);
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 */
  ngOnInit(): void {
  }
}
