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
      this.mapURL='https://maps.google.com/maps?q=16.5757734,-40.4306167&hl=es&z=2&amp&output=embed'
    }else{
      this.mapURL=`https://maps.google.com/maps?q=${this.coordinates?.latitude},${this.coordinates?.longitude}&hl=es&z=4&amp&output=embed`
    }
  }
}
