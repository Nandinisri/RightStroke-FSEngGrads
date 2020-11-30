/*---------------------------------------------------------------app.component.html----------------------------------------*/
<div class="container">
    
    <div>
        <div [appDomManipulation]="'highlight'">Iam Srinivas.</div>
        <span>Iam  web developer</span>
    </div>

    <p [appDomManipulation]="'color'" >
        This is the paragraph tag
    </p>

    <a href="#" [appDomManipulation]="'col'">Google</a>

    <button (click)="ADD()">ADD</button>

    <div *ngFor="let d of customer">
          <ul>
              <li>{{d.name}}</li>
          </ul>
    </div>
</div>
/*----------------------------------------------------------------app.component.ts------------------------------------------*/

import { AfterViewInit, asNativeElements, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Validator,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import {PaymentPayLoadService} from './payment-pay-load.service';
import { FraudulentPaymentService } from './fraudulent-payment.service';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';

import {OneconversionService} from './oneconversion.service';

import {Pipe,PipeTransform} from '@angular/core'

import {filter,map,debounceTime,distinctUntilChanged, switchMap, reduce} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Currency } from './Currency';
import { search } from './search.interface';
import { documents} from './Docuements';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  customer=
  [
    {name:"John",Id:0},
    {name:"Srinu",Id:1},
    {name:"Yuvi",Id:2},
    {name:"Lohi",Id:3}
  ]

  ADD()
 {
   this.customer.push({name:"Kiran",Id:7})
 }
  
  ngOnInit() 
  {
    
  }

}
/*---------------------------------------------------------------app.component.css-------------------------------------------*/

[highlight]{
    background-color: blueviolet;
    color: white;
}

[color]{
    color:greenyellow;
}

[col]{
    color:gold;
}
/*-------------------------------------------------dom-manipulation.directive.ts--------------------------------------------*/
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDomManipulation]'
})
export class DomManipulationDirective implements OnInit
{
  @Input() appDomManipulation;

  constructor(private Element : ElementRef,private render:Renderer2) { }
  
  ngOnInit(): void 
  {
       this.render.setAttribute(this.Element.nativeElement,this.appDomManipulation,'');
  }
}