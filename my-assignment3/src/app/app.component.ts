import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonWasClicked = false;

  onButtonClick() {
    this.buttonWasClicked = true;
  }

}
