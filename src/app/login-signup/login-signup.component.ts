import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzDropDownDirective} from "ng-zorro-antd/dropdown";

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzDropDownDirective,
    ReactiveFormsModule
  ],
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent implements OnInit {
  private fb= inject(FormBuilder);

  registerForm:FormGroup<RegistrationForm> = this.fb.group({
    username:this.fb.group({
      name:['', Validators.required],
    }),
    login:this.fb.group({
      mail:['',Validators.required,Validators.email],
      password:['',Validators.required]
    })
  });
  ngOnInit(): void {

  }

  isButtonDisabled() {
    const usernameGroup = this.registerForm.get('username');
    const loginGroup = this.registerForm.get('login');

    return this.registerForm.invalid ||
      !usernameGroup?.get('name')?.dirty ||
      !loginGroup?.get('mail')?.dirty ||
      !loginGroup?.get('password')?.dirty;
  }
}
export interface RegistrationForm {
  username: FormGroup<Username>;
  login:FormGroup<Login>;
}
export interface Username {
  name:FormControl<string | null>;
}
export interface Login {
  mail:FormControl<string| null>;
  password:FormControl<string | null>;
}
