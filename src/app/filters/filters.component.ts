import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../shared/services/records.service';

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

  constructor(private filterService: RecordsService) { 
    console.log(this.selectedValues);
  }

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

    /* for(var i=0; i<this.months.length; i++){
      if(this.months[i].checked == true){
        this.selectedMonths.push(this.months[i].name);
      }
    }
    console.log(this.selectedMonths);

    for(var i=0; i<this.users.length; i++){
      if(this.users[i].checked == true){
        this.selectedUsers.push(this.users[i].name);
      }
    }
    console.log(this.selectedUsers);

    for(var i=0; i<this.types.length; i++){
      if(this.types[i].checked == true){
        this.selectedTypes.push(this.types[i].name);
      }
    } 
    console.log(this.selectedTypes);
    this.selectedValues = this.selectedMonths.concat(this.selectedUsers, this.selectedTypes);
    console.log(this.selectedValues); */
  }

  getValue(data){
    if(data.checked === true){
      this.selectedValues.push(data.value);
      console.log(this.selectedValues);
    }
    if(data.checked == false){
      this.selectedValues.splice(this.selectedValues.indexOf(data.value), 1);
      console.log(this.selectedValues);
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
  this.months.forEach(val => {
    if(val.checked == false){
      this.selectedAllMonths = true;
      this.deselectedAllMonths = false;
    }else if(val.checked == true){
      this.deselectedAllMonths = true;
      this.selectedAllMonths = false;
    }
  })
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
    this.selectedValues = this.selectedValues.concat(this.selectedMonths);
    console.log(this.selectedValues);
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
    console.log(this.selectedValues);
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
    this.selectedValues = this.selectedValues.concat(this.selectedTypes);
    console.log(this.selectedValues);
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
    this.selectedValues.concat(this.selectedMonths);
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
    this.filterService.sendSelectedValues(this.selectedValues);
    console.log(this.selectedValues);
  }
}