import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppbarComponent } from './shared/components/appbar/appbar/appbar.component';

import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HomeModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
