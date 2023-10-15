import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoModule } from 'src/app/shared/modules/kendo/kendo.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent }
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    KendoModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
