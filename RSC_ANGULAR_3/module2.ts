/*-----------------------------------------------------app.component.html-------------------------------------------*/
<div class="container"> 
     <h1>Payment section</h1>
     <br>
    <form [formGroup]="myform"  (ngSubmit)="assign();">

      <div class="form-group row">
        <label for="input1" class="col-sm-2 col-form-label">User Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="User Name" id="input1" formControlName="UserName">
          <small *ngIf="myform.get('UserName').touched && myform.get('UserName').hasError('required')">Enter the Username</small>
        </div>
      </div>
     
      <div class="form-group row">
        <label for="input2" class="col-sm-2 col-form-label">Account No</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="Your Account no" id="input2" formControlName="Account_No_From">
          <small *ngIf="myform.get('Account_No_From').touched && myform.get('Account_No_From').hasError('required')">Enter your Account No</small>
        </div>
      </div>
     
      <div class="form-group row"> 
        <label class="col-sm-2 col-form-label">Account No</label>
        <div class="col-sm-10">
          <input type="text" class="form-control"  placeholder="Beneficiary Account no" formControlName="Account_No_To">
          <small *ngIf="myform.get('Account_No_To').touched && myform.get('Account_No_To').hasError('required')">Enter the beneficiary Account No</small>
        </div>
      </div>

      <div class="form-group row">
           <label class="col-sm-2 col-label-form">Curreny</label>
           <div class="col-sm-10">
              <select  class="custom-select" formControlName="curr">
                  <option value="" disabled>Choose the currency</option>
                  <option *ngFor="let cnt of currency" value={{cnt.code}} >{{cnt.name}}</option>
              </select>
              <small *ngIf="myform.get('curr').touched && myform.get('curr').hasError('required')">Please select the currency</small>
           </div>
      </div>
     

      <div class="form-group row"> 
        <label class="col-sm-2 col-label-form">Amount </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" class="form-control" formControlName="amount" >
          <small *ngIf="myform.get('amount').touched && myform.get('amount').hasError('required')">Enter the amount</small>
        </div>
      </div>
      <br>
      
      <div class="form-group row">
        <button type="submit" class="btn btn-primary" [disabled]="!myform.valid" data-toggle="modal" data-target="#exampleModalCenter">
          Pay
        </button>
      </div>
    </form>

    <div class="modal fade" id="exampleModalCenter" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle" style="text-align: center;">Your Payment Status</h5>
          </div>
          <div class="modal-body">
            <div *ngIf="Insuffiecient_Amount">
              In your account you have insufficient amount 
            </div>
            <div *ngIf="Wrong_Id">
              You have enterd a wrong username.
            </div>
            <div *ngIf="Wrong_Acc_no">
              You have entered a wrong account number;
            </div>
            <div *ngIf="Everything_good">
               Payment is done successfully.
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-secondary" (click)="reset()" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</div>
      
/*----------------------------------------------------------app.component.ts---------------------------------------------------*/

import { Component, OnInit} from '@angular/core';
import {Validator,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import {PaymentPayLoadService} from './payment-pay-load.service';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  Users:any;
  UserName:string;
  Account_No_From:string;
  Account_No_To:string;
  amount:number=0;
  curr: string;

  
  
  Insuffiecient_Amount:boolean=false;
  Wrong_Id:boolean=false;
  Wrong_Acc_no:boolean=false;
  Everything_good:boolean=false;

  currency=[
    
    {id:0,code:'AUD',name:"Australian Dollar"},
    {id:1,code:'CAD',name:"Canadian Dollar"},
    {id:2,code:'EUR',name:"Euroes"},
    {id:3,code:'GBP',name:"British Pound"},
    {id:4,code:'INR',name:"Indian Rupee"},
    {id:5,code:'NZD',name:"Newzealand Dollar"},
    {id:6,code:'USD',name:"United states Dollar"}

  ]
  

  myform:FormGroup;

  
  

  constructor(private payment:PaymentPayLoadService,private formbuilder: FormBuilder)
  {
    this.myform=formbuilder.group
    ({
      UserName : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      Account_No_From : new FormControl('',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]),
      Account_No_To : new FormControl('',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]),
      amount : new FormControl('',[Validators.required]),
      curr : new FormControl('',[Validators.required])
    })
  }
   
  

  ngOnInit(): void
  {
     
     this.payment.getCustomersList().
     subscribe
     (
       data=>
       {
         this.Users=data;
       }
     ) 
     
  }
  assign()
  {
    console.log(this.myform.value.curr)
    for(let user of this.Users)
    {
      if(user.Customer_Id!=this.myform.value.UserName)
      {
        this.Wrong_Id=true;
      }
      else if(user.My_Acc_no!=this.myform.value.Account_No_From || user.Beneficiary_Acc_no!=this.myform.value.Account_No_To)
      {
        this.Wrong_Acc_no=true;
      }
      else if(user.Amount<this.myform.value.amount)
      {
        this.Insuffiecient_Amount=true;
      }
      else
      {
        this.Everything_good=true;
      }
    }

  }
  reset()
  {
    this.Wrong_Id=false;
    this.Wrong_Acc_no=false;
    this.Insuffiecient_Amount=false;
    this.Everything_good=false;    
  }
  
}

/*---------------------------------------------------------------app.module.ts--------------------------------------------------------------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ForexserviceService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

/*-----------------------------------------------------------------app.component.css--------------------------------------------------------*/
.container{
    padding-top: 10%;
    padding-left: 10%;
    
}

h1{
    text-align: center;
}

input.ng-touched.ng-invalid
{
    border : 1px solid red;
}

select.ng-touched.ng-invalid
{
    border: 1px solid red;
}

/*-----------------------------------------------------------------payment-pay-load.service.ts---------------------------------------------------*/
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentPayLoadService {

  constructor(private httpclient:HttpClient) { }

  getCustomersList()
  {
    return this.httpclient.get('http://localhost:3000/Srinivas');
  }
  
}
/*--------------------------------------------------------------------------JSON.json---------------------------------------------------------------*/
{
    "Nandini":
    [
         {
             "Id":1,
             "Customer_Id":"Nandini Srivastava",
             "Amount":10000,
             "My_Acc_no":22222222222,
             "Beneficiary_Acc_no":33333333333
         }

    ]
}