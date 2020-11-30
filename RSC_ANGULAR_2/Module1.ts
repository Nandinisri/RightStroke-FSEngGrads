/*-------------------------------------------------app.component.html----------------------------------------------------------------------------------------*/
<div>
    <img appDomManipulation src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg" alt="Lion Image">
</div>
/*-------------------------------------------------appDomManipulation.directive.ts---------------------------------------------------------------------------*/
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive
({
  selector: '[appDomManipulation]'
})
export class DomManipulationDirective implements OnInit{

  @Input() appDomManipulation;

  constructor(private Element : ElementRef,private render:Renderer2) { }
  
  ngOnInit(): void 
  {

  }

   @HostBinding('style.transition') transistion:string;
   @HostBinding('style.width') width:string;
   @HostBinding('style.transform') transform:string;
   @HostBinding('style.padding-top') paddingtop:string='10%';
   @HostBinding('style.padding-left') paddingleft:string='30%';

  

  @HostListener('mouseover') onmouseenter()
  {
    this.transistion='0.5s all ease-in-out';
    this.transform='scale(1.5)'

  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.transform='scale(1)'

  }


}