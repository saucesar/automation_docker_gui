import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: 'outline'
    }
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hidePassword: boolean = true;
  public errors: any = {
    'email': false,
    'password': false,
  };

  constructor()
  {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnInit(): void {
    
  }

  public toggleHidePassword() {
    this.hidePassword = !this.hidePassword
  }

  public submit() {
    const json_data = this.getFormAsJson()
    // console.log(json_data);
  }

  get email() {
    return this.loginForm.controls['email']
  }

  get password() {
    return this.loginForm.controls['password']
  }

  getFormAsJson() {
    this.errors['email'] = !this.email.valid
    this.errors['password'] = !this.password.valid
    
    return {
      email: this.email.value,
      password: this.password.value,
    }
  }
}
