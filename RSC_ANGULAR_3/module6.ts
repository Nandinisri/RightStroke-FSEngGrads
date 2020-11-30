  
/*------------------------------------------------------------------------app.component.html--------------------------------------------------*/
<div class="container">
   

    <div class="form-group row">
        <label class="col-sm-2 col-label-form">Select Customer:</label>
        <div class="col-sm-10">
           <select  class="custom-select">
               <option value="" >Choose the customer type</option>
               <option *ngFor="let cnt of customerTypes">{{cnt.name}}</option>
           </select>
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-2 col-label-form">Select currency:</label>
        <div class="col-sm-10">
           <select  class="custom-select">
               <option value="" >Choose the currency</option>
               <option *ngFor="let cnt of currency">{{cnt.code}}</option>
           </select>
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-2 col-label-form">Select Credit Card Type:</label>
        <div class="col-sm-10">
           <select  class="custom-select">
               <option value="" >Choose the credit type</option>
               <option *ngFor="let cnt of  creditcardTypes">{{cnt.name}}</option>
           </select>
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-2 col-label-form">Select Country:</label>
        <div class="col-sm-10">
           <select  class="custom-select" (change)="changeCountry($event.target.value)">
               <option value="" >Choose the currency</option>
               <option *ngFor="let cnt of countryList" value={{cnt.id}} >{{cnt.name}}</option>
           </select>
        </div>
    </div>
    
    <div class="form-group row">
        <label class="col-sm-2 col-label-form">Select City:</label>
        <div class="col-sm-10">
           <select  class="custom-select">
               <option value="" >Choose the city</option>
               <option *ngFor="let cnt of cities">{{cnt}}</option>
           </select>
        </div>
    </div>
        
</div>
/*--------------------------------------------------------------app.component.ts-------------------------------------------------------------*/

import { asNativeElements, Component, OnInit} from '@angular/core';
import {Validator,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import {PaymentPayLoadService} from './payment-pay-load.service';
import { FraudulentPaymentService } from './fraudulent-payment.service';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';

import {OneconversionService} from './oneconversion.service';

import {Pipe,PipeTransform} from '@angular/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
   countryList:any;
   customerTypes:any;
   creditcardTypes:any;
   currency:any;
   constructor(private n:ForexserviceService){}
   ngOnInit(): void 
   {
        this.n.getcountry().
        toPromise().then
        (
        
          data1=>
          {
            this.countryList=data1;
          }
        )

        this.n.getcustomer().
        toPromise().then
        (
           data2=>
           {
             this.customerTypes=data2;
           }
        )

        this.n.getcreditcard().
        toPromise().then
        (
          data3=>
          {
            this.creditcardTypes=data3;
          }
        )

        this.n.getcurrency().
        toPromise().then
        (
          data4=>
          {
            this.currency=data4;
          }
        )
   }
    
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.id == count).cities;
  }
}
/*--------------------------------------------------------------------app.component.css---------------------------------------------*/
.container{
    padding-top:10% ;
}
/*-----------------------------------------------------------dropdowm.service.ts-------------------------------------------------------*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForexserviceService 
{

    constructor(private httpclient:HttpClient){}
    
    getcountry()
    {
      return this.httpclient.get('http://localhost:3000/countryList')

    }

    getcustomer()
    {
      return this.httpclient.get('http://localhost:3000/Customer_types')
    }

    getcreditcard()
    {
      return this.httpclient.get('http://localhost:3000/Crdeitcard_types')
    
    }

    getcurrency()
    {
      return this.httpclient.get('http://localhost:3000/currency')
    }
}
/*-------------------------------------------------------------------------JSON.json--------------------------------------------------*/
{
    "countryList": [
        { "id":0,"name": "Germany", "cities": ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"] },
        { "id":1,"name": "Spain", "cities": ["Barcelona","Dech","Eroti","Uysi","Kripo"] },
        { "id":2,"name": "USA", "cities": ["Downers Grove","San Francico","Godi","Lodi"] },
        { "id":3,"name": "Mexico","cities": ["Puebla","Merio","Giodi","Luop"] },
        { "id":4,"name": "China", "cities": ["Beijing","Hiuwai","Godiya","Gyma","Kyyu"] },
        { "id":5,"name":"India", "cities": ["Rajahmundry","Vizag","Vijawada","Kakinada","Guntur"]}
      ],
    
      "Customer_types": [
        {"id":0,"name":"Single Account"},
        {"id":1,"name":"Multiple Acount"},
        {"id":2,"name":"Joint Account"}
      ],

      "Crdeitcard_types":[
          {"name":"Visa"},
          {"name":"Master card"},
          {"name":"American Express"},
          {"name":"SBI platinum"},
          {"name":"citi Bank card"}
      ],

      "currency": [
        {"code":"AUD"},
        {"code":"CAD"},
        {"code":"EUR"},
        {"code":"GBP"},
        {"code":"INR"},
        {"code":"NZD"},
        {"code":"USD"}
    
      ]
}
/*--------------------------------------------------------------------app.module.ts----------------------------------------------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule} from '@angular/common/http';
import {OneconversionService} from './oneconversion.service';
import { AgeCaluclatorPipe } from './age-caluclator.pipe';
import { FormattingCreditCardNumberPipe } from './formatting-credit-card-number.pipe';
import { CurrencyconverterPipe } from './currencyconverter.pipe';
import { ShowbalancePipe } from './showbalance.pipe';
import { ShowbalanceofcreditcardnumberPipe } from './showbalanceofcreditcardnumber.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AgeCaluclatorPipe,
    FormattingCreditCardNumberPipe,
    CurrencyconverterPipe,
    ShowbalancePipe,
    ShowbalanceofcreditcardnumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ForexserviceService,
              OneconversionService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
