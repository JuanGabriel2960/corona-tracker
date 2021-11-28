import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from './country-card/country-card.component';
import { MapCardComponent } from './map-card/map-card.component';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    CountryCardComponent,
    MapCardComponent,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CountryCardComponent,
    MapCardComponent
  ]
})
export class ComponentsModule { }
