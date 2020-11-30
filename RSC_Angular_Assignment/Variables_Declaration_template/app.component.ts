import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment1';
  selectedcity:number=0;

  public cities:any=[
    {
      id:1,
      name:'Chennai',
      state:'TN'
    },
    {
      id:2,
      name:'Hyderabad',
      state:'TS'
    },
    {
      id:3,
      name:'Vizag',
      state:'AP'
    }
  ];
  Str:String=''
  log(id:number)
  {
    for(var v of this.cities)
    {
      if(v.id===+id)
      {
          this.Str=`You have selected ${v.state} state`;
      }
    }
   }
    
  }

