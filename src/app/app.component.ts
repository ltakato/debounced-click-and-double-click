import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'double-click-debounce-poc';

  clickLog() {
    console.log('single clicked!')
  }

  doubleClickLog() {
    console.log('double clicked!')
  }
}
