import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output('incrementingNumber') incrementing = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  onStart() {
    // setInterval(this.incrementing.emit(number++), 1000);
    this.interval = setInterval(() => {
      this.incrementing.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }
}
