import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/component/home/home.component';
import { EmployeeComponent } from './modules/employee/component/employee/employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then((l) => l.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then((r) => r.RegisterModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
