import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppbarComponent } from './component/appbar/appbar.component';
import { KendoModule } from '../../modules/kendo/kendo.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/component/home/home.component';
import { homeIcon, gearIcon, userIcon, fileAddIcon } from '@progress/kendo-svg-icons';

@NgModule({
  declarations: [
    AppbarComponent
  ],
  exports: [
    AppbarComponent
  ],
  imports: [
    CommonModule,
    KendoModule,
    RouterModule
  ]
})
export class AppbarModule { }
