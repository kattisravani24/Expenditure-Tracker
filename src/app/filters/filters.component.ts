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

  selectedAllTypes:boolean = false;
  deselectedAllTypes:boolean = true;

  selectedValues: string[] = [];
  uniqueSelecedValues: string[] = [];

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

    /* for(var i=0; i<this.months.length; i++){
      if(this.months[i].checked == true){
        this.selectedValues.push(this.months[i].name);
      }
      
    }

    for(var i=0; i<this.users.length; i++){
      if(this.users[i].checked == true){
        this.selectedValues.push(this.users[i].name);
      }
    }

    for(var i=0; i<this.types.length; i++){
      if(this.types[i].checked == true){
        this.selectedValues.push(this.types[i].name);
      }
    } */
    console.log(this.selectedValues); 

  }

  getValue(data){
    
    if(data.checked === true){
      this.selectedValues.push(data.value);
      console.log(this.selectedValues);
    }
    if(data.checked == false){
      this.selectedValues.splice(this.selectedValues.indexOf(data.value), 1);
      console.log(this.selectedValues.indexOf(data.value));
      console.log(this.selectedValues);
    }
    
    /* for(var i = 0; i < this.selectedValues.length; i++){
      if(this.uniqueSelecedValues.indexOf(this.selectedValues[i]) === -1){
        this.uniqueSelecedValues.push(this.selectedValues[i]);
      }
    } */
    //console.log(this.uniqueSelecedValues);
  }
  /**
   * To select all months/ users
   */
  selectAll(value){
    this.months.forEach(value => {
      value.checked = true;
      this.selectedAllMonths = false;
      this.deselectedAllMonths = true;
    })

    this.users.forEach(value=>{
      value.checked = true;
      this.selectedAllUsers = false;
      this.deselectedAllUsers = true;
    })

    this.types.forEach(value=>{
      value.checked = true;
      this.selectedAllTypes = false;
      this.deselectedAllTypes = true;
    })
  }
  /**
   * To deselect all months
   */
  deselecteAll(value){
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

  deselecteAllTypess(){
    this.types.forEach(type => {
      type.checked = false;
      this.selectedAllTypes = true;
      this.deselectedAllTypes = false;
    })
  }

  
}