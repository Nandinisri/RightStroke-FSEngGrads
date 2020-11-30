import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment1';
  name:any='';
  onkey(event:any){
    this.name=event.target.value;
  }

  value:any='';
  onenter(value:string){
    this.value=value;
  }
  
  val:any='';
  onenter1(key:string){
    this.val=key;
  }

  User:any;
  Hit(){
    this.User='This is button click event';
  }
}