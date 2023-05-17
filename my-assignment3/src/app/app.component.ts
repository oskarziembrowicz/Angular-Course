import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonWasClicked = false;
  buttonClickCounter = 0;
  buttonClickCount = [];

  onButtonClick() {
    this.buttonClickCounter++;
    this.buttonClickCount.push(this.buttonClickCounter)
    this.buttonWasClicked = true;
  }

}
