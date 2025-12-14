import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { Step1PersonalComponent } from './onbording/step1-personal/step1-personal.component';
import { Step2PersonalComponent } from './onbording/step2-personal/step2-personal.component';
import { Step3PersonalComponent } from './onbording/step3-personal/step3-personal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutPatientComponent } from './layout-patient/layout-patient.component';


@NgModule({
  declarations: [
    Step1PersonalComponent,
    Step2PersonalComponent,
    Step3PersonalComponent,
    DashboardComponent,
    LayoutPatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
