import { Component, OnInit ,TemplateRef} from '@angular/core';
import { Subscription } from 'rxjs';
import { SendRecordsService } from '../shared/services/send-records.service';
import { FilterService } from '../shared/services/filter.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';

@Component({
  selector: 'trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.css']
})
export class TrackertableComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  subscription: Subscription;
  constructor(private filters: FilterService, public receiveRecord: SendRecordsService,  private modalService: BsModalService) { }

  // variables for processing a transaction
  records:{ user:string, desc:string, income:number, expense:number, date:any}[] = [];
  incomes: number[] = [];
  expenses: number[] = [];
  totalIncome: number = 0.0;
  totalExpense:number = 0.0;
  savings: number = 0.0;
  draft:boolean = false;

  // variables for filtering
  filtered: any[] = [];
  test;
  users: string[] = [];

  ngOnInit(){ 
    /**
     * Subscribing to recieve record service and getting the transaction values
     */
    this.subscription = this.receiveRecord.getTransaction().subscribe(val => {
      if(val){
        this.records.push(val);
        this.incomes.push(val.income);
        this.expenses.push(val.expense);
        this.users.push(val.user);
      }else{
        this.records = [];
      } 
      //Calculating total income 
      this.totalIncome = this.incomes.reduce(function(a, b){
        return Number(a) + Number(b);
        }, 0);
      //Calculating total expenses 
      this.totalExpense = this.expenses.reduce(function(a, b){
        return Number(a) + Number(b);
        }, 0);
      // Calculating total saving
      this.savings = this.totalIncome - this.totalExpense;
      // If saving is less than 0 showing warning message to the user
      if(this.savings < 0){
        this.draft = true;
      }else if(this.savings > 0){
        this.draft = false;
      }
    })

    this.subscription = this.filters.getFilteredValues().subscribe(val => {
      if(val){
        this.filtered.push(val);
        console.log(this.filtered); 
      }
    })   
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  
  deleteitem(record): void{ 
   const i =this.records.findIndex( t => t.user===record);
   if(record !== 1){
    this.records.splice(record,1);
  }
   this.message = 'Confirmed!';
   this.modalRef.hide();

    console.log(record);
 }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  filterTable(){  
    let temp = [];
    console.log(this.users);
    console.log(this.filtered[0].users);
    for(var i=0; i<this.users.length; i++){
      for(var j=0; j<this.filtered.length; j++){
        if(this.users[i].includes(this.filtered[j].users)){
          temp.push(this.filtered[j].users);
        }
      }
    }   
  }
}
