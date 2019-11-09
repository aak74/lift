import { Component } from '@angular/core';
// import { FloorComponent } from './components/floor/floor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  floors = [1, 2, 3];
  title = 'lift';
}
