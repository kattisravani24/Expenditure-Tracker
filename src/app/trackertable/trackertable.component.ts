import { Component, OnInit ,TemplateRef} from '@angular/core';
import { Subscription } from 'rxjs';
import { SendRecordsService } from '../shared/services/send-records.service';
import { FilterService } from '../shared/services/filter.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';

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
  dates:any[] = [];
  months:any[] = [];
  types:any[] = [];

  ngOnInit(){ 
    
    /**
     * Subscribing to recieve record service and getting the transaction values
     */
    this.subscription = this.receiveRecord.getTransaction().subscribe(val => {
      if(val){
        this.records.push(val);
        this.incomes.push(val.income);
        this.expenses.push(val.expense);

        //Getting months from selected date
        this.dates.push(val.date);
        var dt = new Date(val.date);
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September",  "October", "November", "December"];
        //console.log('date is '+this.dates);
        this.months.push(monthNames[dt.getMonth()]);
        console.log('Entered Month: ' + this.months);

        //Getting users from selected users
        this.users.push(val.user);
        console.log('Entered User: ' + this.users);

        //Getting types from selected users
        if(val.income > 0){
          this.types.push('Income');
          console.log('Entered Type: ' + this.types);
        }else if(val.expense > 0){
          this.types.push('Expenditure');
          console.log('Entered Type: ' + this.types);
        }

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
        //console.log(this.filtered); 
      }
    })   
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  
  /* deleteitem(record): void{ 
   this.records =this.records.filter( t => t.income!==record.income);
   this.message = 'Confirmed!';
   this.modalRef.hide();
    console.log(record);
 } */

 deleteitem(record): void{ 
  this.records.findIndex( t => t.user===record);
  if(record !== 1){
   this.records.splice(record,1);
   console.log(this.records.splice(record,1));
   console.log(this.incomes.splice(this.incomes[record], 1));
   console.log(this.expenses.splice(this.expenses[record], 1));
 }
 this.message = 'Confirmed!';
 this.modalRef.hide();

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

}
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  filterTable(){  
    let temp = [];
    for(var i=0; i<this.users.length; i++){
      for(var j=0; j<this.filtered.length; j++){
        if(
            (this.users[i].includes(this.filtered[j].users)) || 
            (this.months[i].includes(this.filtered[j].months)) || 
            (this.types[i].includes(this.filtered[j].types)) || 
            ((this.users[i].includes(this.filtered[j].users)) && ((this.months[i].includes(this.filtered[j].months)))) ||
            ((this.users[i].includes(this.filtered[j].users))) && ((this.types[i].includes(this.filtered[j].types))) ||
            ((this.months[i].includes(this.filtered[j].months))) && ((this.types[i].includes(this.filtered[j].types))) ||
            ((this.users[i].includes(this.filtered[j].users)) && (this.months[i].includes(this.filtered[j].months)) && this.types[i].includes(this.filtered[j].types))
          ){
          temp.push(this.filtered[j].users);
          /* this.records.includes(this.filtered[j].users);
          console.log('Matching record is ' + this.records); */
          temp.push(this.filtered[j].months); 
          temp.push(this.filtered[j].types);
        }
        else{
          console.log('No matching records found');
        }
      }
      /* console.log('Filtered Users' + this.filtered[0].users);
      console.log('Filtered Months' + this.filtered[0].months);
      console.log('Filtered Types' + this.filtered[0].types);  */
    }  
    
    console.log("Matching record: " + temp);
  }
}