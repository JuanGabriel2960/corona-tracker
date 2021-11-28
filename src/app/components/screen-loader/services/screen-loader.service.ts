import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenLoaderService {

  public loading: boolean;

  statusChange: Subject<boolean> = new Subject<boolean>()
  constructor() {
    this.loading = false
  }

  start() {
    this.loading = true
    this.statusChange.next(this.loading)
  }
  stop() {
    this.loading = false
    this.statusChange.next(this.loading)
  }
}
