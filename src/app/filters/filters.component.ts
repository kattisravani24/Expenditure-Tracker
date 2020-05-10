import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  months: {name:string, checked:boolean, shown:boolean}[];
  users: {name:string, checked:boolean, shown:boolean}[];
  types: {name:string, checked:boolean}[];

  selectedAllMonths:boolean = false;
  deselectedAllMonths:boolean = true;
  displayedAllMonths:boolean = true;
  hiddenFewMonths:boolean = false;

  selectedAllUsers:boolean = false;
  deselectedAllUsers:boolean = true;
  displayedAllUsers:boolean = true;
  hiddenFewUsers:boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.months = [
      { name: 'January', checked: true, shown: true },
      { name:'Feburary', checked:true, shown: true },
      { name:'March', checked:true , shown: true },
      { name:'April', checked:true, shown: false  },
      { name:'May', checked:true, shown: false  },
      { name:'June', checked:true , shown: false },
      { name:'July', checked:true , shown: false },
      { name:'August', checked:true , shown: false },
      { name:'September', checked:true , shown: false },
      { name:'October', checked:true, shown: false  },
      { name:'November', checked:true , shown: false },
      { name:'December', checked:true , shown: false }
    ];
    this.users = [
      { name:'Ahemmed', checked: true, shown: true }, 
      { name:'Dileep', checked: true, shown: true }, 
      { name:'Sravani', checked: true, shown: true }, 
      { name:'Suman', checked: true, shown: false }
    ];
    this.types = [
      {name:'Income', checked:true}, 
      {name:'Expenditure', checked:true}
    ];
  }
  /**
   * To select all months
   */
  selectAllMonths(){
    this.months.forEach(month => {
      month.checked = true;
      this.selectedAllMonths = false;
      this.deselectedAllMonths = true;
    })
  }
  /**
   * To deselect all months
   */
  deselecteAllMonths(){
    this.months.forEach(month => {
      month.checked = false;
      this.selectedAllMonths = true;
      this.deselectedAllMonths = false;
    })
  }
  /**
   * To show all months
   */
  showMoreMonths(){
    this.months.forEach(month=>{
      month.shown = true;
      this.displayedAllMonths = false;
      this.hiddenFewMonths = true;
    })
  }
  /**
   * To show only 3 months
   */
  showLessMonths(){
    this.months.forEach((month, index) =>{
      if(index > 2){
        month.shown = false;
        this.hiddenFewMonths = false;
        this.displayedAllMonths = true;
      }
    })
  }
  /**
   * To select all users
   */
  selectAllUsers(){
    this.users.forEach(user=> {
      user.checked = true;
      this.selectedAllUsers = false;
      this.deselectedAllUsers = true;
    })
  }
  /**
   * To deselect all users
   */
  deselecteAllUsers(){
    this.users.forEach(user => {
      user.checked = false;
      this.selectedAllUsers = true;
      this.deselectedAllUsers = false;
    })
  }
  /**
   * to show all users
   */
  showMoreUsers(){
    this.users.forEach(user=>{
      user.shown = true;
      this.displayedAllUsers = false;
      this.hiddenFewUsers = true;
    })
  }
  /**
   * To show only 3 users
   */
  showLessUsers(){
    this.users.forEach((user, index) =>{
      if(index > 2){
        user.shown = false;
        this.hiddenFewUsers = false;
        this.displayedAllUsers = true;
      }
    })
  }
}