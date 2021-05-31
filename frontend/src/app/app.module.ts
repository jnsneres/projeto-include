import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  
  imports: [
    BrowserModule,
    TabViewModule,
    InputTextModule,
    CardModule,
    InputNumberModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

