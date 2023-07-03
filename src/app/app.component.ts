import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JeffOlio';
  cursorStyle = {};

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursorStyle = {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
      display: 'block'
    };
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.cursorStyle = {
      display: 'none'
    };
  }
}
