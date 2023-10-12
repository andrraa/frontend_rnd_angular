import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  RegisterUser(registerData: any) {
    return this.http.post('https://localhost:44352/api/User/UserRegister', registerData);
  }

  LoginUser(loginData: any) {
    return this.http.post('https://localhost:44352/api/User/UserLogin', loginData);
  }
}
