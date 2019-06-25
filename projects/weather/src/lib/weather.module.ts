import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    MatButtonModule
  ],
  exports: [WeatherComponent]
})
export class WeatherModule { }
