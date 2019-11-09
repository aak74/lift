import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FloorComponent } from './components/floor/floor.component';
import { LiftDoorsComponent } from './components/lift-doors/lift-doors.component';
import { ControlsComponent } from './components/controls/controls.component';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    LiftDoorsComponent,
    ControlsComponent,
    ControlComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
