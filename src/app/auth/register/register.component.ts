import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthCMSService } from '../services/auth-cms.service';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { ScreenLoaderService } from 'src/app/components/screen-loader/services/screen-loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formSubmitted = false;
  stepForm: number = 1;
  animate: boolean;

  public registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    role: ['', Validators.required],
  });

  private _subscription;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService, private authCMSService: AuthCMSService, private screenLoaderService: ScreenLoaderService) {
    this.animate = authCMSService.animate
    this._subscription = authCMSService.statusChange.subscribe((value) => {
      this.animate = value;
    });
  }

  register() {
    this.formSubmitted = true;

    if (this.registerForm.get('email')?.valid && this.registerForm.get('password')?.valid && this.registerForm.get('role')?.invalid) {
      this.nextStep()
      return;
    }

    if (this.registerForm.invalid) {
      return;
    }

    this.screenLoaderService.start()
    this.authService.register(this.registerForm.value)
      .subscribe(resp => {
        this.router.navigateByUrl('/');
      }, (err) => {
        Swal.fire({ title: 'Error', text: err.error.errors[0].msg, icon: 'error', confirmButtonColor: '#2541B1' }).then(function () {
          location.reload();
        })
      }).add(() => {
        this.screenLoaderService.stop()
      })
  }

  nextStep() {
    this.authCMSService.startAnimation()
    setTimeout(() => {
      this.stepForm = 2;
    }, 1000);
  }

  invalidField(field: string): boolean {
    if (this.registerForm.get(field)?.invalid && this.formSubmitted) {
      return true
    } else {
      return false
    }
  }

  get emailErrorMsg(): string {
    const errors = this.registerForm.get('email')?.errors;
    if (errors?.required) {
      return 'Required'
    } else {
      return 'Email is not valid'
    }
  }

  get passwordErrorMsg(): string {
    const errors = this.registerForm.get('password')?.errors;
    if (errors?.required) {
      return 'Required'
    } else {
      return 'Must contain at least 8 characters'
    }
  }

  get roleErrorMsg(): string {
    const errors = this.registerForm.get('role')?.errors;
    if (errors?.required) {
      return 'Required'
    }

    return ''
  }
}
