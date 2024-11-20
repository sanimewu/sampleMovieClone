import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzDropDownDirective} from "ng-zorro-antd/dropdown";
import {MovieListService} from "../service/movie-list.service";
import {RouterLink} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzDropDownDirective,
    ReactiveFormsModule,
    RouterLink
  ],
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent implements OnInit, OnDestroy {
  private fb= inject(FormBuilder);
  private destroy$ = new Subject<void>();
  constructor(private movieListService: MovieListService) {
  }

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
    // this.movieListService.test().pipe(takeUntil(this.destroy$)).subscribe((res)=>{
    //   console.log('LoginComponent',res);
    // });
  }

  isButtonDisabled() {
    const usernameGroup = this.registerForm.get('username');
    const loginGroup = this.registerForm.get('login');

    return this.registerForm.invalid ||
      !usernameGroup?.get('name')?.dirty ||
      !loginGroup?.get('mail')?.dirty ||
      !loginGroup?.get('password')?.dirty;
  }

  onClick() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }


  ngOnDestroy(): void {
    // this.destroy$.next();
    // console.log('Unsubscribe Login');
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
