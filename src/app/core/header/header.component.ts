import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sidenavToggle = new EventEmitter;

  constructor() {
  }

  emitEvent() {
    this.sidenavToggle.emit();
  }

}
