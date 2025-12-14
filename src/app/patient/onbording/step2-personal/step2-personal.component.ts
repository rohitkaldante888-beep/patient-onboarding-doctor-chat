import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OnbordingService } from '../../../core/services/onbording.service';

@Component({
  selector: 'app-step2-personal',
  templateUrl: './step2-personal.component.html',
  styleUrls: ['./step2-personal.component.scss']
})
export class Step2PersonalComponent {
 medicalForm!: FormGroup;

  bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Unknown'];
  allergies = ['Penicillin', 'Aspirin', 'Sulfa', 'Latex', 'Shellfish', 'None', 'Other'];
  chronicConditions = ['Diabetes', 'Hypertension', 'Asthma', 'Heart Disease', 'Arthritis', 'None'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private onboardingService: OnbordingService
  ) {}

  ngOnInit(): void {
    this.medicalForm = this.fb.group({
      blood_type: [''],
      current_medications: [''],
      known_allergies: [[]],
      chronic_conditions: [[]],
      previous_surgeries: [''],
      family_medical_history: [''],
    });

    // Load saved draft
    this.onboardingService.getMedical().subscribe((data: any) => {
      if (data) this.medicalForm.patchValue(data);
    });
  }

  toggleArrayValue(controlName: string, value: string) {
    const current = this.medicalForm.get(controlName)?.value || [];
    if (current.includes(value)) {
      this.medicalForm.patchValue({
        [controlName]: current.filter((v: string) => v !== value),
      });
    } else {
      this.medicalForm.patchValue({
        [controlName]: [...current, value],
      });
    }
  }

  saveAndNext() {
    this.onboardingService.saveMedical(this.medicalForm.value).subscribe(() => {
      this.router.navigate(['/patient/onboarding/step3']);
    });
  }

  back() {
    this.router.navigate(['/patient/onboarding/step1']);
  }
}