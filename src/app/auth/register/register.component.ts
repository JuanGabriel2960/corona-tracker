import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formSubmitted = false;

  public registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    // role: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  register(){
    this.formSubmitted=true;
    console.log(this.registerForm.value)

    if(this.registerForm.invalid){
      return;
    }

    this.authService.register(this.registerForm.value)
      .subscribe(resp=>{
        this.router.navigateByUrl('/');
      }, (err)=>{
        console.log(err.msg)
      })
  }

  invalidField(field: string): boolean{
    if(this.registerForm.get(field)?.invalid && this.formSubmitted){
      return true
    }else{
      return false
    }
  }

  get emailErrorMsg(): string{
    const errors = this.registerForm.get('email')?.errors;
    if(errors?.required){
      return 'Required'
    }else{
      return 'Email is not valid'
    }
  }

  get passwordErrorMsg(): string{
    const errors = this.registerForm.get('password')?.errors;
    if(errors?.required){
      return 'Required'
    }else{
      return 'Must contain at least 8 characters'
    }
  }

}
