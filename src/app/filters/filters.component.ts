
import { Component, OnInit } from '@angular/core';
import { FilterService } from '../shared/services/filter.service';

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

  selectedAllTypes:boolean = false;
  deselectedAllTypes:boolean = true;

  selectedValues: string[] = [];
  selectedMonths:string[] = [];
  selectedUsers:string[] = [];
  selectedTypes:string[] =[];
  
  constructor(private filterService: FilterService) { }

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
      { name:'Aadya', checked: true, shown: true }, 
      { name:'Aadvik', checked: true, shown: true }, 
      { name:'Malathi', checked: true, shown: true }, 
      { name:'Sravani', checked: true, shown: false }
    ];
    this.types = [
      {name:'Income', checked:true}, 
      {name:'Expenditure', checked:true}
    ];
  }

  getUser(myUser){
    if(myUser.checked === true){
      this.selectedUsers.push(myUser.value);
      console.log(this.selectedUsers);
      this.sendSelectedValues();
    }
    if(myUser.checked == false){
      this.selectedUsers.splice(this.selectedUsers.indexOf(myUser.value), 1);
      console.log(this.selectedUsers);
      this.sendSelectedValues();
    } 
    this.users.forEach(val => {
      if(val.checked == false){
        this.selectedAllUsers = true;
        this.deselectedAllUsers = false;
      }else if(val.checked == true){
        this.deselectedAllUsers = true;
        this.selectedAllUsers = false;
      } 
    })  
  }
  getMonth(myMonth){
    if(myMonth.checked === true){
      this.selectedMonths.push(myMonth.value);
      console.log(this.selectedMonths);
      this.sendSelectedValues();
    }
    if(myMonth.checked == false){
      this.selectedMonths.splice(this.selectedMonths.indexOf(myMonth.value), 1);
      console.log(this.selectedMonths);
      this.sendSelectedValues();
    } 
  this.months.forEach(val => {
    if(val.checked == false){
      this.selectedAllMonths = true;
      this.deselectedAllMonths = false;
    }else if(val.checked == true){
      this.deselectedAllMonths = true;
      this.selectedAllMonths = false;
    }
  })
}
getType(myType){
  if(myType.checked === true){
    this.selectedTypes.push(myType.value);
    console.log(this.selectedTypes);
    this.sendSelectedValues();
  }
  if(myType.checked == false){
    this.selectedTypes.splice(this.selectedTypes.indexOf(myType.value), 1);
    console.log(this.selectedTypes);
    this.sendSelectedValues();
  } 
  this.types.forEach(val => {
    if(val.checked == false){
      this.selectedAllTypes = true;
      this.deselectedAllTypes = false;
    }else if(val.checked == true){
      this.deselectedAllTypes = true;
      this.selectedAllTypes = false;
    }
  })  
  }
  /**
   * To select all months
   */
  selectAllMonths(){
    this.months.forEach(month => {
      month.checked = true;
      this.selectedAllMonths = false;
      this.deselectedAllMonths = true;
      if(month.checked == true){
        this.selectedMonths.push(month.name);
      } 
      else if(month.checked == false){
        this.selectedMonths.length = 0;
      }
    })
    console.log(this.selectedMonths);
    this.sendSelectedValues();
  }
  selectAllUSers(){
    this.users.forEach(user=>{
      user.checked = true;
      this.selectedAllUsers = false;
      this.deselectedAllUsers = true;
      if(user.checked == true){
        this.selectedUsers.push(user.name);
      } else if(user.checked == false){
        this.selectedUsers.length = 0;
      }
    })
    console.log(this.selectedUsers);
    this.selectedValues = this.selectedValues.concat(this.selectedUsers);
    this.sendSelectedValues();
  }
  selectAllTypes(){
    this.types.forEach(type=>{
      type.checked = true;
      this.selectedAllTypes = false;
      this.deselectedAllTypes = true;
      if(type.checked == true){
        this.selectedTypes.push(type.name);
      } else if(type.checked == false){
        this.selectedTypes.length = 0;
      }
    })
    console.log(this.selectedTypes);
    this.sendSelectedValues();
  }
  /**
   * To deselect all months
   */
  deselecteAllMonths(){
    this.months.forEach(month => {
      month.checked = false;
      this.selectedAllMonths = true;
      this.deselectedAllMonths = false;
      if(month.checked == false){
        this.selectedMonths.length = 0;
      }
    })
    console.log(this.selectedMonths);
    this.sendSelectedValues();
  }
  /**
   * To deselect all users
   */
  deselecteAllUsers(){
    this.users.forEach(user => {
      user.checked = false;
      this.selectedAllUsers = true;
      this.deselectedAllUsers = false;
      if(user.checked == false){
        this.selectedUsers.length = 0;
      }
    })  
    console.log(this.selectedUsers);
    this.sendSelectedValues();
  }
  deselecteAllTypess(){
    this.types.forEach(type => {
      type.checked = false;
      this.selectedAllTypes = true;
      this.deselectedAllTypes = false;
      if(type.checked == false){
        this.selectedTypes.length = 0;
      }
    })
    console.log(this.selectedTypes);
    this.sendSelectedValues();
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
  
  sendSelectedValues(){
    this.filterService.sendFilteredValues(
      {
        users: this.selectedUsers, 
        months: this.selectedMonths, 
        types: this.selectedTypes
      });
  }
}