import { Injectable } from '@angular/core';
import { floorsCount, liftCount } from './lift.data';

@Injectable({
  providedIn: 'root'
})
export class LiftService {

  constructor() { }

  getFloors() {
    return Array(floorsCount).fill(0).map((_, i) => floorsCount - i);;
  }

  getLiftCount() {
    return liftCount;
  }

  getControls(floor: number) {
    // console.log(floor);
    if (floor >= floorsCount) {
      return ['down'];
    }

    if (floor === 1) {
      return ['up'];
    }
    return ['up', 'down'];
  }

  pushButton(direction: string, floor: number) {
    console.log('LiftService.pushButton', direction, floor);

  }
}
