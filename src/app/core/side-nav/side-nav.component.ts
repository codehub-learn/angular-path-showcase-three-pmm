import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @Output() sidenavClose = new EventEmitter;

  constructor() { }

  emitEvent() {
    this.sidenavClose.emit();
  }

}
