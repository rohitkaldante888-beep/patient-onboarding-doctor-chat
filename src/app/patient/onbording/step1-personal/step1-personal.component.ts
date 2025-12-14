import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnbordingService } from '../../../core/services/onbording.service'

@Component({
  selector: 'app-step1-personal',
  templateUrl: './step1-personal.component.html',
  styleUrls: ['./step1-personal.component.scss']
})
export class Step1PersonalComponent implements OnInit {
  personalForm!: FormGroup;

  genders = ['Male', 'Female', 'Other', 'Prefer not to say'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private onboardingService: OnbordingService
  ) {}

  ngOnInit(): void {
    this.personalForm = this.fb.group({
      full_name: ['', [Validators.required, Validators.minLength(2)]],
      dob: ['', Validators.required],
      gender: [''],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      emergency_contact_name: ['', Validators.required],
      emergency_contact_phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });

    // Load draft if exists
    this.onboardingService.getPersonal().subscribe((data: any) => {
      if (data) this.personalForm.patchValue(data);
    });
  }

  saveAndNext() {
    if (this.personalForm.invalid) return;

    // Save to backend
    this.onboardingService.savePersonal(this.personalForm.value).subscribe(() => {
      // Navigate to step 2
      this.router.navigate(['/patient/onboarding/step2']);
    });
  }
}
