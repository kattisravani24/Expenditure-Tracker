import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddincomeComponent } from './addincome/addincome.component';
import { TrackertableComponent } from './trackertable/trackertable.component'; 
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import {RouterModule} from'@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AddincomeComponent,
    TrackertableComponent,
    LoginComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TableModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path:'',
          component: LoginComponent
        },
        {
          path:'addincome',
          component: AddincomeComponent
        }
      ]
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }