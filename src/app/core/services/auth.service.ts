import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl;
  constructor(private http : HttpClient) { }

  signIn(data : any) {
    return this.http.post(`${this.url}/auth/signin`, data);
  }

  signUp(data : any) {
    return this.http.post(`${this.url}/auth/signup`, data);
  }


}
