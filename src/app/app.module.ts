import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddincomeComponent } from './addincome/addincome.component';
import { TrackertableComponent } from './trackertable/trackertable.component'; 
import { LoginComponent } from './login/login.component';
import { ChartholderComponent } from './chartholder/chartholder.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Pie2Component } from './charts/pie2/pie2.component';
import { SendComponent } from './records/send/send.component';
import { ReceiveComponent } from './records/receive/receive.component';
import { FiltersComponent } from './filters/filters.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {PasswordModule} from 'primeng/password';

import { ReactiveFormsModule } from '@angular/forms';

import {RouterModule} from'@angular/router';

import { RecordsService } from './shared/services/records.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {HttpClientModule} from '@angular/common/http';

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
    ReceiveComponent,
    FiltersComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    CheckboxModule,
    CalendarModule,
    MultiSelectModule,
    DropdownModule,
    PasswordModule,
    HttpClientModule,
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
      ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }