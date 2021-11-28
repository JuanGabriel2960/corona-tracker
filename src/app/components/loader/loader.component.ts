import { Component, OnInit } from '@angular/core';
import { faCircleNotch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  // Icons
  faCircleNotch: IconDefinition = faCircleNotch;

  loading: boolean;
  private _subscription;

  constructor(private loaderService: LoaderService) {
    this.loading = loaderService.loading
    this._subscription = loaderService.statusChange.subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnInit(): void {
  }

}
