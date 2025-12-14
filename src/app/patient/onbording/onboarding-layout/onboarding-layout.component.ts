import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-onboarding-layout',
  templateUrl: './onboarding-layout.component.html',
  styleUrls: ['./onboarding-layout.component.scss']
})
export class OnboardingLayoutComponent implements OnInit {
  currentStep = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateStepBasedOnUrl();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateStepBasedOnUrl();
    });
  }

  private updateStepBasedOnUrl(): void {
    const url = this.router.url;
    if (url.includes('step1')) {
      this.currentStep = 1;
    } else if (url.includes('step2')) {
      this.currentStep = 2;
    } else if (url.includes('step3')) {
      this.currentStep = 3;
    }
  }
}