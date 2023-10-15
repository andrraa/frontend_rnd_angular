import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { KendoModule } from 'src/app/shared/modules/kendo/kendo.module';

import { AppbarComponent } from './shared/components/appbar/appbar/appbar.component';
import { LoginComponent } from './modules/login/component/login/login.component';
import { HomeComponent } from './modules/home/component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    KendoModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
