import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPatientComponent } from './layout-patient/layout-patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Step1PersonalComponent } from './onbording/step1-personal/step1-personal.component';
import { Step3PersonalComponent } from './onbording/step3-personal/step3-personal.component';
import { authGuard } from '../core/guard/auth.guard';

const routes: Routes = [
  // parenet and child routing base on this 
  {
  path: '', // Parent URL segment
  component: LayoutPatientComponent, // Component for /products
  canActivate: [authGuard],
  data :{ role : 'patient'},
  children: [
    // Child routes go here
    {path : 'dashboard' , component : DashboardComponent},
    {path : 'onboarding-step1' , component :Step1PersonalComponent },
    {path : 'onboarding-step2' , component :Step3PersonalComponent },
    {path : 'onboarding-step3' , component :Step3PersonalComponent }
  ]
}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
