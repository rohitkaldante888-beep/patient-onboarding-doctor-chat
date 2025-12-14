import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class OnbordingService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  savePersonal(data: any) {
    const patientId = localStorage.getItem('patientId');
    return this.http.post(
      `${this.baseUrl}/onboarding/personal/${patientId}`,
      data
    );
  }

  getPersonal(): Observable<any> {
    const patientId = localStorage.getItem('patientId');
    return this.http.get(`${this.baseUrl}/onboarding/personal/${patientId}`);
  }
  getMedical(): Observable<any> {
    const patientId = localStorage.getItem('patientId');
    return this.http.get(`${this.baseUrl}/onboarding/medical/${patientId}`);
  }

  saveMedical(data: any) {
    const patientId = localStorage.getItem('patientId');
    return this.http.post(
      `${this.baseUrl}/onboarding/medical/${patientId}`,
      data
    );
  }

  // Insurance
  getInsurance(): Observable<any> {
    const patientId = localStorage.getItem('patientId');
    return this.http.get(`${this.baseUrl}/onboarding/insurance/${patientId}`);
  }

  saveInsurance(data: any) {
    const patientId = localStorage.getItem('patientId');
    return this.http.post(
      `${this.baseUrl}/onboarding/insurance/${patientId}`,
      data
    );
  }

  getDoctors() {
    return this.http.get(`${this.baseUrl}/doctors`);
  }
}
