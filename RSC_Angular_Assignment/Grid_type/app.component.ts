
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'angularAssignment1';
  persons = [

  ];
 
  Id:number;
  Product: String;
  Description:String;
  Cost:String;
  
  add(Id,Product,Description,Cost){
    this.persons.push({
      "Id":Id,
      "Product": Product,
      "Description":Description,
      "Cost":Cost
      
    });

    // resetting the input field
   
    this.Id = undefined;
    this.Product = "";
    this.Description="";
    this.Cost="";
  }
    
}