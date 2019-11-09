import { Component, Input } from '@angular/core';
import { LiftService } from 'src/app/services/lift.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass']
})
export class ControlsComponent {
  @Input() floor: number;

  constructor(private liftService: LiftService) { }

  getControls() {
    return this.liftService.getControls(this.floor);
  }
}
