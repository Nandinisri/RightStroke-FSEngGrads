/*---------------------------------------------------------------app.component.html---------------------------------------*/
<div class="container">
    
        <div class="row">
           <label class="col-sm-2">DOB:</label>
           <input type="date" style="margin-left: 8px;" [(ngModel)]="birthdate">
           <div style="margin-left: 8px;">
               <strong>{{birthdate | ageCaluclator: birthdate }} </strong>
           </div>
        </div>
        
        <br>

        <div class="row">
            <label class="col-sm-2"> CC_number:</label>
            <input type="text" [(ngModel)]="num" placeholder="CreditCard number">
            <div style="margin: 8px;">
               <strong> {{num | formattingCreditCardNumber:num}}</strong> 
            </div>
        </div>

        <br>

        <div class="row">
          <label class="col-sm-2">Account number:</label>
          <input type="text" [(ngModel)]="Account_balance" placeholder="Account number">
          <div>
             <strong> {{Account_balance | showbalance:Account_balance}}</strong> 
          </div>
        </div>
        
       
        <br>

        <div class="row">
          <label class="col-sm-2">creditcard number:</label>
          <input type="text"  id="idnum" onkeyup="addHyphen(this)" [(ngModel)]="Limit" placeholder="CreditCard number">
          <div>
             <strong> {{Limit | showbalanceofcreditcardnumber:Limit}}</strong> 
          </div>
        </div>
  
        <br>

        <div>
            <h5>Currency conversion</h5>
            <div>
                <p>
                  <strong>From : </strong>
                  <select  [(ngModel)]="From">
                    <option *ngFor="let cnt of currency" value={{cnt.id}}>{{cnt.code}}</option>
                  </select>
               
                  <strong> To : </strong>
                  <select  [(ngModel)]="To">
                    <option *ngFor="let cnt of currency">{{cnt.code}}</option>
                  </select>  
                </p>
            </div>
            
            <div>
                <p>
                   Enter the amount: <input type="number" placeholder="Enter amount" [(ngModel)]="value"/>  
                </p>
            </div>

            <p><strong>The value in {{To}} is {{value | currencyconverter:From:To:value | currency:To}}</strong>  </p>
        </div>
        
</div>
/*-----------------------------------------------------------app.component.ts------------------------------------------------------------*/

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
   ngOnInit(): void {

   }
    
   
   age:number;
   birthdate:string;
   num:string;

   Account_balance:string
   Limit:string;

   From:number;
  To:string;
  value:number;
  Result:any;
  code:string;

  currency=[
    {id:0,code:'AUD'},
    {id:1,code:'CAD'},
    {id:2,code:'EUR'},
    {id:3,code:'GBP'},
    {id:4,code:'INR'},
    {id:5,code:'NZD'},
    {id:6,code:'USD'},

  ]
}
/*---------------------------------------------------------------------c.js-------------------------------------------------------------*/

function addHyphen (element) 
{
  let ele = document.getElementById(element.id);
  ele = ele.value.split('-').join('');   
  let finalVal = ele.match(/.{1,4}/g).join('-');
  document.getElementById(element.id).value = finalVal;
}
/*-------------------------------------------------------------------app.component.css-------------------------------------------------*/
.container
{
    padding-top: 10%;
    padding-left: 20%;
}
/*-------------------------------------------------------------------age-caluclator.pipe.ts--------------------------------------------*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCaluclator'
})
export class AgeCaluclatorPipe implements PipeTransform {

  transform(value: string, bir:string): string
  {
    if(bir!=undefined)
    {
      var   today= new Date();
      const b =new Date(bir)
      var diff_year=today.getFullYear()-b.getFullYear();
      var diff_month=today.getMonth()-b.getMonth();  
      if(diff_month<0 || (diff_month===0 && today.getDate()<b.getDate()))
      {
         diff_year--;
      }
      return `Your  age is ${diff_year}`
    }
  }
}
/--------------------------------------------------------------------formatting-creditcard-number.pipe.ts-------------------------------------/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattingCreditCardNumber'
})
export class FormattingCreditCardNumberPipe implements PipeTransform {

  transform(value: string,n:string): string
  {
    if(n!=undefined)
    {
       var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
       var matches = value.match(/\d{4,16}/g);
       var match = matches && matches[0] || ''
       var parts = []
       for (var i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4))
       }
       if (parts.length)
        {
           return   `Formatted credit card number ${parts.join('  ')}`
        }     
       else 
      {
           return `Formateed credit card number ${value}`;
      }
    }
   }

}
/-----------------------------------------------------------------showbalance.pipe.ts----------------------------------------------------/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showbalance'
})
export class ShowbalancePipe implements PipeTransform {

  transform(value: string): string
  {
    if(value!=undefined)
    {

      if(value==='11111111111')
      {
        return 'Your balance is $20,000'
      }
    }
  }
    

}
/----------------------------------------------------------------showbalanceofcreditcardnumber.pipe.ts--------------------------/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showbalanceofcreditcardnumber'
})
export class ShowbalanceofcreditcardnumberPipe implements PipeTransform {

  transform(value:string): string 
  {
    console.log(value)
    if(value!=undefined)
    {

      if(value.length<19)
      {
        return ' '
      }
      else if(value==="8888-8888-8888-8888")
      {
        return 'you can withdraw 10,000 per day';
      }
      else{
        return 'You enterd a invalid credt card number'
      }

    }
  }
    
}
/*----------------------------------------------------------------------------currencyconversion.pipe.ts---------------------------------*/
import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';

@Pipe({
  name: 'currencyconverter'
})
export class CurrencyconverterPipe implements PipeTransform {

  transform(value:number,From:string,To:number): number 
  {
    if(From!=undefined && To!=undefined && value!=undefined)
    {
      var currency_codes=[
        {AUD:1,CAD:0.96,EUR:0.61,GBP:0.56,INR:52.62,NZD:1.08,USD:0.72},      //AUD-0(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
        {AUD:1.05,CAD:1,EUR:0.64,GBP:0.59,INR:55.06,NZD:1.13,USD:0.75},      //CAD-1(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
        {AUD:1.63,CAD:1.56,EUR:1,GBP:0.91,INR:85.96,NZD:1.77,USD:1.17},      //EUR-2(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
        {AUD:1.79,CAD:1.71,EUR:1.09,GBP:1,INR:94.02,NZD:1.94,USD:1.29},      //GBP-3(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
        {AUD:0.019,CAD:0.018,EUR:0.012,GBP:0.011,INR:1,NZD:0.021,USD:0.014}, //INR-4(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
        {AUD:0.92,CAD:0.88,EUR:0.57,GBP:0.52,INR:48.56,NZD:1,USD:0.66},      //NZD-5(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD} 
        {AUD:1.39,CAD:1.333,EUR:0.85,GBP:0.78,INR:73.32,NZD:1.51,USD:1}];    //USD-6(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
      
        var res=currency_codes[From][To]*value;
        return res
  
    }
  }


}
/*--------------------------------------------------------------------app.module.ts------------------------------------*/
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
