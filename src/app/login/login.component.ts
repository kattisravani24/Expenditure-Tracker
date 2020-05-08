import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl('',
        [
          Validators.required, 
          Validators.minLength(3)
        ]),  
      password: new FormControl('',
        [
          Validators.required, 
          Validators.minLength(8)])
      })
    }
  get username(){
    return this.myForm.get('username');
  }
  get password(){
    return this.myForm.get('password');
  }
}