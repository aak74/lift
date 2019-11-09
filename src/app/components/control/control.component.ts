import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Control } from '../../services/interfaces';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.sass']
})
export class ControlComponent {
  @Input() control: Control = { direction: 'up', isActive: false };
  @Output() pushButton = new EventEmitter<Control>();

  constructor() { }

  onClick() {
    this.pushButton.emit(this.control);
  }
}
