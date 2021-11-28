import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthCMSService {
  public animate: boolean;
  statusChange: Subject<boolean> = new Subject<boolean>()

  constructor(private http: HttpClient, private router: Router) {
    this.animate=false
  }

  getServices(){
    return this.http.get(`${environment.BACKEND_URL}/api/basic/services`)
      .pipe(
        tap((resp: any)=>{})
    )
  }

  startAnimation(){
    this.animate=true
    this.statusChange.next(this.animate)
  }
}
