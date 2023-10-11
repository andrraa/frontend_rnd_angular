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

  deleteEmployee(id: number) {
    return this.http.delete('https://localhost:44352/api/Employee/DeleteEmployee/' + id);
  }

  addEmployee(newData: any) {
    return this.http.post('https://localhost:44352/api/Employee/AddEmployee', newData);
  }

  editEmployee(newData: any) {
    return this.http.put('https://localhost:44352/api/Employee/UpdateEmployee/' + newData.id, newData);
  }

  searchEmployee(id: number) {
    return this.http.post('https://localhost:44352/api/Employee/GetEmployee/' + id, {});
  }
}
