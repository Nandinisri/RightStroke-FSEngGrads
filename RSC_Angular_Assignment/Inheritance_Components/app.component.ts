import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'angularAssignment1';
  
  Users=[
    {id:1,fname:"John"},
    {id:2,fname:"Keny"},
    {id:2,fname:"Mary"}
  ];
  
}