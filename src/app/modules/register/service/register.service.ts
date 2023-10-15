import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(registerData: any) {
    return this.http.post('https://localhost:44352/api/User/UserRegister', registerData);
  }
}
