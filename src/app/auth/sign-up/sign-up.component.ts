import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  loading = false;
  errorMsg = '';
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', Validators.required]
    });
  }

  get f() {
    return this.signUpForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.signUpForm.invalid) return;

    this.loading = true;
    this.errorMsg = '';

    this.authService.signUp(this.signUpForm.value).subscribe({
      next: () => {
        this.router.navigate(['/sign-in']);
      },
      error: (err:any) => {
        this.errorMsg = err.error?.error || 'Signup failed';
        this.loading = false;
      }
    });
  }
}
