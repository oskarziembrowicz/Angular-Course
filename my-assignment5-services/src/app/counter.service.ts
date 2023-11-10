import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  numberOfActions = 0;

  addAction() {
    this.numberOfActions++;
    console.log(this.numberOfActions);
  }
}
