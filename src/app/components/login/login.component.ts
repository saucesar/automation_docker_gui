import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  )
  {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnInit(): void {
    this.email.setValue('docker@automation.com')
    this.password.setValue('12345678')
  }

  public toggleHidePassword() {
    this.hidePassword = !this.hidePassword
  }

  public submit() {
    let logged = this.authService.login(this.email.value, this.password.value)
    if (logged) {
      this.toastr.success('Login bem sucedido', 'Sucesso')
      this.router.navigate(['/dashboard'])
    } else {
      this.toastr.error('Varifique suas credenciais', 'Erro')
    }
  }

  get email() {
    return this.loginForm.controls['email']
  }

  get password() {
    return this.loginForm.controls['password']
  }
}
