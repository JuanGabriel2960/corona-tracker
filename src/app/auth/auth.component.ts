import { Component, OnInit } from '@angular/core';
import { AuthCMSService } from './services/auth-cms.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  index: number = 0
  services: any[] = []

  constructor(private authService: AuthService, private authCMS: AuthCMSService) { }

  ngOnInit(): void {
    this.authCMS.getServices()
    .subscribe(resp=>{
      this.services=resp
    }, (err)=>{
      // NOTE: change console.log to swal.fire
      console.log('Error getting services from the applications, please try again later.')
    })
  }

  changeService(index: number){
    this.index = index
  }

}
