import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup;
  loading = false;
  errorMsg = '';
  showPassword = false; // 👈 add this

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.signInForm.invalid) return;

    this.loading = true;
    this.errorMsg = '';

    this.authService.signIn(this.signInForm.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);

        if (res.onboardingStatus === 'completed') {
          this.router.navigate(['/patient/dashboard']);
        } else {
          this.router.navigate([`/patient/onboarding/${res.onboardingStatus}`]);
        }
      },
      error: (err) => {
        this.errorMsg = err.error?.error || 'Login failed';
        this.loading = false;
      }
    });
  }
}
