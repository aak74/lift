import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.sass']
})

export class FloorComponent implements OnInit {
  lifts = [1, 2];
  constructor() { }

  ngOnInit() {
  }

}
