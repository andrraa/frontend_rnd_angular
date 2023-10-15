import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { KendoModule } from 'src/app/shared/modules/kendo/kendo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';

const routes: Routes = [
  { path: '', component: LoginComponent }
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    KendoModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [LoginService]
})
export class LoginModule { }
