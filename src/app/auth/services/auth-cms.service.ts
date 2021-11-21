import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthCMSService {

  constructor(private http: HttpClient, private router: Router) { }

  getServices(){
    return this.http.get(`${environment.BACKEND_URL}/api/basic/services`)
      .pipe(
        tap((resp: any)=>{})
    )
  }
}
