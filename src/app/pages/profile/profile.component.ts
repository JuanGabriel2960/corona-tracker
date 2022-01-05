import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ScreenLoaderService } from 'src/app/components/screen-loader/services/screen-loader.service';
import { UserService } from '../services/user.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user';
import { UpdateUser } from 'src/app/interfaces/update-user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;
  formSubmitted = false;

  public updateForm = this.fb.group({
    role: ['', Validators.required],
    password: ['', [Validators.required]],
    newpassword: ['', Validators.minLength(8)],
  });

  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService, private screenLoaderService: ScreenLoaderService) {
    this.user = authService.user;
    this.updateForm.patchValue({
      role: this.user.role
    })
  }

  ngOnInit(): void {
  }

  updateUser() {
    this.formSubmitted = true;

    if (this.updateForm.invalid) {
      return;
    }

    let format: UpdateUser = {
      role: "",
      password: "",
      newpassword: "",
    }

    if(this.updateForm.value.newpassword==''){
      format = {
        role: this.updateForm.value.role,
        password: this.updateForm.value.password,
        newpassword: this.updateForm.value.password,
      }
    }else{
      format = {
        role: this.updateForm.value.role,
        password: this.updateForm.value.password,
        newpassword: this.updateForm.value.newpassword,
      }
    }

    this.screenLoaderService.start()
    this.userService.updateUser(format, this.user._id)
      .subscribe(resp => {
        Swal.fire({ title: 'Success', text: resp.msg, icon: 'success', confirmButtonColor: '#2541B1' }).then(function () {window.location.reload();});
      }, (err) => {
        Swal.fire({ title: 'Error', text: err.error.msg, icon: 'error', confirmButtonColor: '#2541B1' }).then(function () {window.location.reload();});
      }).add(() => {
        this.screenLoaderService.stop()
      })
  }

  logout(){
    this.authService.logout()
  }

  invalidField(field: string): boolean {
    if (this.updateForm.get(field)?.invalid && this.formSubmitted) {
      return true
    } else {
      return false
    }
  }

  get passwordErrorMsg(): string {
    const errors = this.updateForm.get('password')?.errors;
    if (errors?.required) {
      return 'Confirm Password'
    } else {
      return ''
    }
  }

  get newPasswordErrorMsg(): string {
    const errors = this.updateForm.get('newpassword')?.errors;
    if (errors) {
      return 'Must contain at least 8 characters'
    } else {
      return ''
    }
  }

}
