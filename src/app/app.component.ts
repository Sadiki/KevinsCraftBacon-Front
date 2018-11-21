import { Component, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoggedInService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'KevinsCraftBacon';
  sessionUser: boolean;
  subscription: Subscription;
  @ViewChild('sidenav') sidenav;

  constructor(private loggedIn: LoggedInService) {
    this.subscription = this.loggedIn.loggedIn.subscribe((value) => this.sessionUser = value);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeypress(event: KeyboardEvent) {
    if (event.key == 'Escape') {
      this.sidenav.toggle();
    } else if (event.altKey) {
      if (event.key == '0') {
        document.getElementById('home').click();
      } else if (event.key == '1') {
        document.getElementById('profile').click();
      } else if (event.key == '2') {
        document.getElementById('login').click();
      } else if (event.key == '3') {
        document.getElementById('register').click();
      } else if (event.key == '4') {
        document.getElementById('cart').click();
      } else if (event.key == '5') {
        document.getElementById('orders').click();
      } else if (event.key == '6') {
        document.getElementById('logout').click();
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
