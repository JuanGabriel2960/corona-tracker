import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Country } from '../../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient, private router: Router) {}

  searchCountry(country: string){
    const token = localStorage.getItem('Authorization') || '';
    const headers = new HttpHeaders({
      Authorization: token
    })

    return this.http.get<Country[]>(`${environment.BACKEND_URL}/api/country/${country}`, {headers})
  }
}
