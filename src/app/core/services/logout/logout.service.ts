import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private http: HttpClient
  ) { }

  // Logout Function
  logoutAccount(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token, // Set Headers
    });

    const options = { headers };
    return this.http.post('https://dev.lms.digi46.id/Template_Identity/api/Auth/Logout', null, options);
  }
}
