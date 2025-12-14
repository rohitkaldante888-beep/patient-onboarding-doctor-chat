import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'auth' , loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path : 'patient' , loadChildren : () => import('./patient/patient.module').then(m => m.PatientModule) },
  {path : 'doctor' , loadChildren : () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  { path : '' , redirectTo : 'auth' , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
