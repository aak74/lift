import { Component, Input } from '@angular/core';
import { LiftService } from 'src/app/services/lift.service';
import { Floor } from 'src/app/services/interfaces';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.sass']
})

export class FloorComponent {
  @Input() floor: Floor = { number: 1, controls: [] };

  constructor(private liftService: LiftService) { }

  getLifts() {
    return Array(this.liftService.getLiftCount()).fill(0);
  }
}
