import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FloorComponent } from './components/floor/floor.component';
import { LiftComponent } from './components/lift/lift.component';
import { ControlsComponent } from './components/controls/controls.component';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    LiftComponent,
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
