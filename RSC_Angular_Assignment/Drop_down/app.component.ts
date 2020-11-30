
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'angularAssignment1';
  k:number=0
  countries=[
    {Id:1,Country:"India"},
    {Id:2,Country:"US"},
    {Id:3,Country:"UK"},

]
      
}