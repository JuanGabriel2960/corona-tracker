import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formSubmitted = false;

  public loginForm = this.fb.group({
    email: ['a@a.com', [Validators.required, Validators.email]],
    password: ['12345678', Validators.required],
  });

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  login(){
    this.formSubmitted=true;
    console.log(this.loginForm.value)

    if(this.loginForm.invalid){
      return;
    }

    // NOTE: add loader
    this.authService.login(this.loginForm.value)
      .subscribe(resp=>{
        this.router.navigateByUrl('/');
      }, (err)=>{
        Swal.fire({title: 'Error', text: err.error.msg, icon: 'error', confirmButtonColor: '#2541B1'})
      })
  }

  invalidField(field: string): boolean{
    if(this.loginForm.get(field)?.invalid && this.formSubmitted){
      return true
    }else{
      return false
    }
  }

  get emailErrorMsg(): string{
    const errors = this.loginForm.get('email')?.errors;
    if(errors?.required){
      return 'Required'
    }else{
      return 'Email is not valid'
    }
  }

  get passwordErrorMsg(): string{
    const errors = this.loginForm.get('password')?.errors;
    if(errors?.required){
      return 'Required'
    }else{
      return ''
    }
  }

  

}
