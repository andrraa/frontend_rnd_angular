import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginData, LoginResponse } from '../model/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(loginData: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('https://dev.lms.digi46.id/Template_Identity/api/Auth/Login', loginData);
  }
}
