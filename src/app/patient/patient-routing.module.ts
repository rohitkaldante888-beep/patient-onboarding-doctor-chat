import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPatientComponent } from './layout-patient/layout-patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Step1PersonalComponent } from './onbording/step1-personal/step1-personal.component';
import { Step3PersonalComponent } from './onbording/step3-personal/step3-personal.component';
import { authGuard } from '../core/guard/auth.guard';
import { OnboardingLayoutComponent } from './onbording/onboarding-layout/onboarding-layout.component';
import { Step2PersonalComponent } from './onbording/step2-personal/step2-personal.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPatientComponent,
    canActivate: [authGuard],
    data: { role: 'PATIENT' },
    children: [
      { path: 'dashboard', component: DashboardComponent },

      {
        path: 'onboarding',
        component: OnboardingLayoutComponent,
        children: [
          { path: 'step1', component: Step1PersonalComponent },
          { path: 'step2', component: Step2PersonalComponent },
          { path: 'step3', component: Step3PersonalComponent },
          { path: '', redirectTo: 'step1', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
