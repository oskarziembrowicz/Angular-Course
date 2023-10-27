import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIncrementingNumber(incrementedNumber: number) {
    if (incrementedNumber & 1) {
      this.oddNumbers.push(incrementedNumber);
    } else {
      this.evenNumbers.push(incrementedNumber);
    }
  }
}
