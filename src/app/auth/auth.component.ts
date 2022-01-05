import { Component, OnInit } from '@angular/core';
import { AuthCMSService } from './services/auth-cms.service';
import Swal from 'sweetalert2';
import { Services } from '../interfaces/services.interfaces';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  index: number = 0
  services: Services[] = []
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
      .subscribe(resp => {
        this.services = resp
      }, (err) => {
        Swal.fire({ title: 'Error', text: 'Getting services from the applications, please try again later', icon: 'error', confirmButtonColor: '#2541B1' })
      })
  }

  changeService(index: number) {
    this.index = index
  }
}
