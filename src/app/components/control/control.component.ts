import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.sass']
})
export class ControlComponent {
  @Input() control: string;
  @Output() pushButton = new EventEmitter<string>();

  constructor() { }

  onClick() {
    this.pushButton.emit(this.control);
  }
}
