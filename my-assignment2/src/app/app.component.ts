import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  isUsernameEmpty = true;

  onUpdateUsername(event: Event) {
    if((<HTMLInputElement>event.target).value != '') {
      this.isUsernameEmpty = false;
    } else {
      this.isUsernameEmpty = true;
    }
  }

  clearUsername() {
    this.username = '';
    this.isUsernameEmpty = true;
  }
}
