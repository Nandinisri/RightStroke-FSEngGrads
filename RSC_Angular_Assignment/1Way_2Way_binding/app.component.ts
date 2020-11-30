
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment1';
  name:String="Srinivas";
  Firstname:String="";
  url='https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg'

  read(username:String){
      alert(`${username} you have clicked the submit button`);
  }
}
