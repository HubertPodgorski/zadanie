import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passData: string;
  update(data) {
    this.passData = data;
    if (this.passData.length > 0) {
      
    }
  }
}
