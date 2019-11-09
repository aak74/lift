import { Component, Input } from '@angular/core';
import { LiftService } from 'src/app/services/lift.service';
import { Floor, Control } from '../../services/interfaces';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass']
})
export class ControlsComponent {
  @Input() floor: Floor = { number: 1, controls: [{ direction: 'up', isActive: false }]};

  constructor(private liftService: LiftService) { }

  getControls() {
    return this.floor.controls;
  }

  click(control: Control) {
    this.liftService.pushButton(control, this.floor);
  }
}
