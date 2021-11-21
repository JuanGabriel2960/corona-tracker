import { Component, OnInit } from '@angular/core';
import { AuthCMSService } from './services/auth-cms.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  index: number = 0
  services: any[] = []
  animate: boolean;
  private _subscription;

  constructor(private authCMSService: AuthCMSService) {
    this.animate = authCMSService.animate
    this._subscription = authCMSService.statusChange.subscribe((value) => { 
      this.animate = value; 
    });
  }

  ngOnInit(): void {
    this.authCMSService.getServices()
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
