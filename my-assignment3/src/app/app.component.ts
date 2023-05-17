import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonWasClicked = false;
  buttonClickCount = [];

  onButtonClick() {
    this.buttonClickCount.push(this.buttonClickCount.length + 1)
    this.buttonWasClicked = !this.buttonWasClicked;
  }

}
