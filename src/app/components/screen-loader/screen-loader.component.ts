import { Component, OnInit } from '@angular/core';
import { faCircleNotch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ScreenLoaderService } from './services/screen-loader.service';

@Component({
  selector: 'app-screen-loader',
  templateUrl: './screen-loader.component.html',
  styleUrls: ['./screen-loader.component.css']
})
export class ScreenLoaderComponent implements OnInit {
  // Icons
  faCircleNotch: IconDefinition = faCircleNotch;

  loading: boolean;
  private _subscription;

  constructor(private screenLoaderService: ScreenLoaderService) {
    this.loading = screenLoaderService.loading
    this._subscription = screenLoaderService.statusChange.subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnInit(): void {
  }

}
