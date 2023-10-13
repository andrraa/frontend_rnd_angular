import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { PagerModule } from '@progress/kendo-angular-pager';
import { PopupModule } from '@progress/kendo-angular-popup';
import { MenuModule } from '@progress/kendo-angular-menu';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { IconsModule } from '@progress/kendo-angular-icons';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { TypographyModule } from '@progress/kendo-angular-typography';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { HttpClientModule } from '@angular/common/http';




















@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    LabelModule,
    DialogsModule,
    DateInputsModule,
    LayoutModule,
    NotificationModule,
    PagerModule,
    PopupModule,
    MenuModule,
    DropDownsModule,
    GridModule,
    IconsModule,
    RippleModule,
    ScrollViewModule,
    TypographyModule,
    UploadsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
