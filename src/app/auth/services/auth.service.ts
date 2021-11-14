import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getServices(){
    return this.http.get(`${environment.BACKEND_URL}/api/basic/services`)
      .pipe(
        tap((resp: any)=>{
          console.log(resp)
        })
    )
  }
}
