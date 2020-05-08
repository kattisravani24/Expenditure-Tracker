import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  months: {name:string, checked:boolean, shown:boolean}[];
  users: string[];
  types: string[];
  selected:boolean = true;
  deselected:boolean = false;
  displayed:boolean = true;
  hidden:boolean = false;
  selectedValues: {value: string}[] = [{value:'val1'}];
/*
  nestedjson = [
    { name: "parent1", value: ["child11", "child12"], checked: false },
    { name: "parent2", value: ["child2"], checked: false },
    { name: "parent3", value: ["child3"], checked: false }
  ];

  isChecked:boolean = true; 
  
  clear() {
    this.nestedjson.forEach(child => {
      child.checked = true;
    })
  }
  */

  constructor() { }

  ngOnInit(): void {
    this.months = [
      { name: 'January', checked: false, shown: true },
      { name:'Feburary', checked:false, shown: true  },
      { name:'March', checked:false , shown: true },
      { name:'April', checked:false, shown: false  },
      { name:'May', checked:false, shown: false  },
      { name:'June', checked:false , shown: false },
      { name:'July', checked:false , shown: false },
      { name:'August', checked:false , shown: false },
      { name:'September', checked:false , shown: false },
      { name:'October', checked:false, shown: false  },
      { name:'November', checked:false , shown: false },
      { name:'December', checked:false , shown: false }
    ];
    this.users = ['Ahemmed', 'Dileep', 'Sravani', 'Suman'];
    this.types = ['Income', 'Expenditure'];
  }
  selectAllMonths(){
    this.months.forEach(month => {
      month.checked = true;
      this.selected = false;
      this.deselected = true;
    })
  }
  deselecteAllMonths(){
    this.months.forEach(month => {
      month.checked = false;
      this.selected = true;
      this.deselected = false;
    })
  }

  showMore(){
    this.months.forEach(month=>{
      month.shown = true;
      this.displayed = false;
      this.hidden = true;
    })
  }
  showLess(){
    this.months.forEach((month, index) =>{
      if(index > 2){
        month.shown = false;
        this.hidden = false;
        this.displayed = true;
      }
    })
  }

}
