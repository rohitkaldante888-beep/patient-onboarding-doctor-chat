import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-layout',
  templateUrl: './onboarding-layout.component.html',
  styleUrls: ['./onboarding-layout.component.scss']
})
export class OnboardingLayoutComponent {
  currentStep = 1;

  constructor(private router: Router) {
    const url = this.router.url;

    if (url.includes('step1')) this.currentStep = 1;
    if (url.includes('step2')) this.currentStep = 2;
    if (url.includes('step3')) this.currentStep = 3;
  }
}
