import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

// Interfaces
import { Login } from '../interfaces/login';
import { Register } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user!: User;

  constructor(private http: HttpClient, private router: Router) {}

  login(formData: Login){
    return this.http.post(`${environment.BACKEND_URL}/api/auth/login`, formData)
      .pipe(
        tap((resp: any)=>{
          localStorage.setItem('Authorization', resp.token)
        })
    )
  }

  register(formData: Register){
    return this.http.post(`${environment.BACKEND_URL}/api/auth/register`, formData)
      .pipe(
        tap((resp: any)=>{
          localStorage.setItem('Authorization', resp.token)
        })
    )
  }

  logout(){
    localStorage.removeItem('Authorization')
    this.router.navigateByUrl('/auth/login')
  }

  validateJWT(): Observable<boolean>{
    const token = localStorage.getItem('Authorization') || '';
    const headers = new HttpHeaders({
      Authorization: token
    })

    return this.http.get(`${environment.BACKEND_URL}/api/auth/renew`, {headers})
      .pipe(
        tap((resp: any)=>{
          const { _id, email, role } = resp.authenticatedUser
          this.user = new User(_id, email, role)

          localStorage.setItem('Authorization', resp.token)
        }),
        map(resp=>true),
        catchError(error=>of(false))
      );
  }
}
