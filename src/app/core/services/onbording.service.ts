import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OnbordingService {

  private baseUrl = environment.apiUrl

  constructor(private http : HttpClient) { }

  savePersonal(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/personal`, data);
  }

  getPersonal(): Observable<any> {
    return this.http.get(`${this.baseUrl}/personal`);
  }


  saveMedical(data: any) {
  return this.http.post(`${this.baseUrl}/medical`, data);
}

getMedical() {
  return this.http.get(`${this.baseUrl}/medical`);
}



saveInsurance(data: any) {
  return this.http.post(`${this.baseUrl}/insurance`, data);
}

getInsurance() {
  return this.http.get(`${this.baseUrl}/insurance`);
}

getDoctors() {
  return this.http.get('http://localhost:5000/api/doctors');
}




}
