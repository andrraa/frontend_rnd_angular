import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(loginData: any) {
    return this.http.post('https://localhost:44352/api/User/UserLogin', loginData);
  }
}
