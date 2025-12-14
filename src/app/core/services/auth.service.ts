import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  signIn(data: any) {
    return this.http.post<any>(`${this.url}/auth/signin`, data).pipe(
      tap(res => this.setSession(res))
    );
  }

  signUp(data: any) {
    return this.http.post<any>(`${this.url}/auth/signup`, data);
  }

  private setSession(res: any) {
    localStorage.setItem('token', res.token);
    localStorage.setItem('role', res.user.role);
    localStorage.setItem('patientId', res.user.patientId);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getPatientId(): string | null {
    return localStorage.getItem('patientId');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.clear();
  }
}
