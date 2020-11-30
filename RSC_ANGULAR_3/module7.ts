/*----------------------------------------------------------------app.component.html------------------------------------------------*/
<div class="container">
  <h1>Forexconversion</h1>
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
    <p>
      <button (click)="caluclate()" class="btn btn-primary" >Caluclate</button>
    </p>
  </div>
   
   <p>The amount in {{To}} is : <strong>{{Result | currency:code}}</strong>  </p>
</div>


/*-----------------------------------------------------------app.component.ts-------------------------------------------------------*/

import { Component, OnInit} from '@angular/core';
import {ForexserviceService} from './forexservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  From:number;
  To:string;
  value:number;
  Result:any;
  code:string;
  title = 'angularAssignment1';
  currency=[
    {id:0,code:'AUD'},
    {id:1,code:'CAD'},
    {id:2,code:'EUR'},
    {id:3,code:'GBP'},
    {id:4,code:'INR'},
    {id:5,code:'NZD'},
    {id:6,code:'USD'},

  ]
  
  constructor(private n:ForexserviceService){

  }
  ngOnInit(): void 
  {
    this.n.value_to_be_send_to_components.
    subscribe(
      data=>{
        this.Result=data;
      }
    )

    this.n.value_to_be_send_to_pipecoversion.
    subscribe(
      val=>{
        this.code=val;
      }
    )
  }
  caluclate(){
      this.n.conversion(this.From,this.To,this.value);
  }      
}
/*---------------------------------------------------------app.component.css---------------------------------------------------*/
.container{
    padding-top: 10%;
    padding-left: 20%;
}
/*-------------------------------------------------------app.module.ts---------------------------------------------------------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ForexserviceService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
/*---------------------------------------------------------ForexserviceService.ts--------------------------------------------------------*/

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForexserviceService {

   private sendingcaluclateresult=new Subject<number>();
   value_to_be_send_to_components=this.sendingcaluclateresult.asObservable();

   private Pipevalue=new Subject<string>();
   value_to_be_send_to_pipecoversion=this.Pipevalue.asObservable();
  
   currency_codes=[
   {AUD:1,CAD:0.96,EUR:0.61,GBP:0.56,INR:52.62,NZD:1.08,USD:0.72},      //AUD-0(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
   {AUD:1.05,CAD:1,EUR:0.64,GBP:0.59,INR:55.06,NZD:1.13,USD:0.75},      //CAD-1(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
   {AUD:1.63,CAD:1.56,EUR:1,GBP:0.91,INR:85.96,NZD:1.77,USD:1.17},      //EUR-2(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
   {AUD:1.79,CAD:1.71,EUR:1.09,GBP:1,INR:94.02,NZD:1.94,USD:1.29},      //GBP-3(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
   {AUD:0.019,CAD:0.018,EUR:0.012,GBP:0.011,INR:1,NZD:0.021,USD:0.014}, //INR-4(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}
   {AUD:0.92,CAD:0.88,EUR:0.57,GBP:0.52,INR:48.56,NZD:1,USD:0.66},      //NZD-5(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD} 
   {AUD:1.39,CAD:1.333,EUR:0.85,GBP:0.78,INR:73.32,NZD:1.51,USD:1}];    //USD-6(Id) to {AUD,CAD,EUR,GBP,INR,NZD,USD}

  constructor() { }

  conversion(FROM:number,TO:string,VALUE:number)
  {
    this.sendingcaluclateresult.next(this.currency_codes[FROM][TO]*VALUE);
    this.Pipevalue.next(TO);
  }    

}

