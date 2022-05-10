import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu:boolean = true;
  title = 'Bharath J Reddy';

  
  getChildData($event:boolean){
    this.menu = $event
  }
}
