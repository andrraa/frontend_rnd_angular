import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/home/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isToggleOn = false;
  dataEmployee: any;
  newData: any = {};
  number: number = 1;
  isAddingData: boolean = true;
  searchId: number = 0;
  searchResult: any;
  isSearching: boolean = false;

  constructor(
    private service: EmployeeService
  ) { }

  ngOnInit(): void {
    this.loadEmployee();
  }

  ToggleFormOn() {
    this.isToggleOn = true;
  }

  ToggleFormOff() {
    this.resetForm();
    this.isToggleOn = false;
  }

  resetForm() {
    this.newData = {};
  }

  // REST API
  loadEmployee() {
    this.service.getAllEmployee().subscribe((response) => {
      this.dataEmployee = response;
    })
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe(() => {
      alert('Berhasil Menghapus Data Employee!');
      this.loadEmployee();
    });
  }

  editEmployee(item: any) {
    this.newData = { ...item };
    this.isAddingData = false;
    this.ToggleFormOn();
  }

  AddEmployee() {
    if (this.isAddingData) {
      this.service.addEmployee(this.newData).subscribe((response) => {
        alert('Berhasil Menambahkan Employee!');
        this.isToggleOn = false;
        this.resetForm();
        this.loadEmployee();
      });
    } else {
      this.service.editEmployee(this.newData).subscribe((response) => {
        alert('Berhasil Mengubah Data!');
        this.isAddingData = true;
        this.resetForm();
        this.ToggleFormOff();
        this.loadEmployee();
      });
    }
  }

  searchEmployee() {
    this.service.searchEmployee(this.searchId).subscribe((data) => {
      this.searchResult = data;
      this.isSearching = true;
    });
  }
}
