import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UpdateUser } from 'src/app/interfaces/update-user.interface';
import { UpdateUserResp } from 'src/app/interfaces/update-user-resp.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {}

  updateUser(formData: UpdateUser, _id: string){
    const token = localStorage.getItem('Authorization') || '';
    const headers = new HttpHeaders({
      Authorization: token
    })

    return this.http.put<UpdateUserResp>(`${environment.BACKEND_URL}/api/user/${_id}`, formData, {headers})
  }
}
