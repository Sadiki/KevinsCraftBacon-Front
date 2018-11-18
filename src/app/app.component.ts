import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KevinsCraftBacon';
  sessionUser = localStorage.getItem('user');
  @ViewChild('sidenav') sidenav;

  // Esc key toggles sidenav
  @HostListener('document:keydown', ['$event'])
  handleKeypress(event: KeyboardEvent) {
    if (event.key == 'Escape') {
      this.sidenav.toggle();
    }
  }
}
