import { Component, Input } from '@angular/core';
import { LiftService } from 'src/app/services/lift.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.sass']
})

export class FloorComponent {
  @Input() floor: number;
  constructor(private liftService: LiftService) { }

  getLifts() {
    return Array(this.liftService.getLiftCount()).fill(0);
  }
}
