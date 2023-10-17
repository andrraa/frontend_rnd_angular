import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployee() {
    return this.http.get('https://localhost:44352/api/Employee/GetAllEmployee');
  }

  addEmployee(employeeData: any) {
    return this.http.post('https://localhost:44352/api/User/UserRegister', employeeData);
  }
}
