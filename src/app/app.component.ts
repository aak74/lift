import { Component } from '@angular/core';
import { LiftService } from './services/lift.service';
// import { FloorComponent } from './components/floor/floor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'How does lifts works';
  constructor(private liftService: LiftService) { }

  getFloors() {
    return this.liftService.getFloors();
  }
}
