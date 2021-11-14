import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getServices(){
    return this.http.get(`http://localhost:8080/api/basic/services`)
      .pipe(
        tap((resp: any)=>{
          console.log(resp)
        })
    )
  }
}
