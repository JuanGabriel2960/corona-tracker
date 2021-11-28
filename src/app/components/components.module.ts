import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountryCardComponent } from './country-card/country-card.component';
import { MapCardComponent } from './map-card/map-card.component';
import { SafePipe } from '../pipes/safe.pipe';
import { ScreenLoaderComponent } from './screen-loader/screen-loader.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    CountryCardComponent,
    MapCardComponent,
    SafePipe,
    ScreenLoaderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    CountryCardComponent,
    MapCardComponent,
    ScreenLoaderComponent,
    LoaderComponent
  ]
})
export class ComponentsModule { }
