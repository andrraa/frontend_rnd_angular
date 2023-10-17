import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { KendoModule } from 'src/app/shared/modules/kendo/kendo.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: EmployeeComponent }
]

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    KendoModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
