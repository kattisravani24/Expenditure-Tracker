import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/app/shared/services/records.service';

@Component({
  selector: 'send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
   constructor(private recordServices: RecordsService) { }
  ngOnInit(): void {
  }/*
  sendRecords(){
    this.recordServices.sendRecords([{name:'aadya', age:2}]);
  } */
}
  