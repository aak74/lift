import { Injectable } from '@angular/core';
import { floorsCount, liftCount } from './lift.data';
import { Floor, Control } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class LiftService {
  floors: Floor[] = [];

  constructor() {
    for (let i = 0; i < floorsCount; i++) {
      const controls = this.getControls(floorsCount - i)
        .map(control => ({ direction: control, isActive: false }));
      this.floors.push({
        number: floorsCount - i,
        controls,
      });
    }
  }

  getFloors() {
    return this.floors;
  }

  getLiftCount() {
    return liftCount;
  }

  getControls(floor: number) {
    if (floor >= floorsCount) {
      return ['down'];
    }

    if (floor === 1) {
      return ['up'];
    }
    return ['up', 'down'];
  }

  pushButton(control: Control, floor: Floor) {
    // console.log('LiftService.pushButton', control, floor);
    control.isActive = !control.isActive;
  }
}
