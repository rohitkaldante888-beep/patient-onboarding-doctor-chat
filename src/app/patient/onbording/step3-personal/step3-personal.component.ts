import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OnbordingService } from '../../../core/services/onbording.service';

@Component({
  selector: 'app-step3-personal',
  templateUrl: './step3-personal.component.html',
  styleUrls: ['./step3-personal.component.scss']
})
export class Step3PersonalComponent {
   insuranceForm!: FormGroup;

  timeSlots = ['Morning', 'Afternoon', 'Evening'];
  referralSources = ['Google', 'Friend', 'Doctor Referral', 'Ad', 'Other'];

  doctors: any[] = []; // fetched from backend

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private onboardingService: OnbordingService
  ) {}

  ngOnInit(): void {
    this.insuranceForm = this.fb.group({
      insurance_provider: ['', Validators.required],
      insurance_id: ['', Validators.required],
      policy_holder_name: ['', Validators.required],
      preferred_doctor: ['', Validators.required],
      preferred_time_slot: [''],
      referral_source: [''],
      additional_notes: [''],
    });

    // Load draft
    this.onboardingService.getInsurance().subscribe((data: any) => {
      if (data) this.insuranceForm.patchValue(data);
    });

    // Load doctors list
    this.onboardingService.getDoctors().subscribe((res: any) => {
      this.doctors = res;
    });
  }

  back() {
    this.router.navigate(['/patient/onboarding/step2']);
  }

  submit() {
    if (this.insuranceForm.invalid) return;

    this.onboardingService.saveInsurance(this.insuranceForm.value).subscribe(() => {
      // Final step completed → go to dashboard
      this.router.navigate(['/patient/dashboard']);
    });
  }

}
