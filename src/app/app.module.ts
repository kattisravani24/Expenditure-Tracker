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
import { ChartholderComponent } from './chartholder/chartholder.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Pie2Component } from './charts/pie2/pie2.component';
import { SendComponent } from './records/send/send.component';
import { ReceiveComponent } from './records/receive/receive.component';

import { RecordsService } from './shared/services/records.service';



@NgModule({
  declarations: [
    AppComponent,
    AddincomeComponent,
    TrackertableComponent,
    LoginComponent,
    ChartholderComponent,
    PiechartComponent,
    NavbarComponent,
    Pie2Component,
    SendComponent,
    ReceiveComponent
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
        },
        {
          path:'chartholder',
          component: ChartholderComponent
        }
      ]
      )
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }