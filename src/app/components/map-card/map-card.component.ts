import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Coordinates } from 'src/app/interfaces/coordinates.interface';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.css']
})
export class MapCardComponent implements OnChanges {
  @Input() coordinates!: Coordinates;
  mapURL!: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges){
    if(this.coordinates===undefined){
      console.log('primera vez')
      this.mapURL='https://maps.google.com/maps?q=34.5757734,-40.4306167&hl=es&z=2&amp&output=embed'
    }else{
      console.log('no primera vez')
      this.mapURL=`https://maps.google.com/maps?q=${this.coordinates?.latitude},${this.coordinates?.longitude}&hl=es&z=4&amp&output=embed`
    }
  }
}
