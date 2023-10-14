import { NgModule } from '@angular/core';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MenuModule } from '@progress/kendo-angular-menu';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { PagerModule } from '@progress/kendo-angular-pager';
import { PopupModule } from '@progress/kendo-angular-popup';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { TypographyModule } from '@progress/kendo-angular-typography';
import { UploadsModule } from '@progress/kendo-angular-upload';

@NgModule({
   imports: [
      ButtonsModule,
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
      IndicatorsModule,
      RippleModule,
      ScrollViewModule,
      TypographyModule,
      UploadsModule,
   ],
   exports: [
      ButtonsModule,
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
      IndicatorsModule,
      RippleModule,
      ScrollViewModule,
      TypographyModule,
      UploadsModule,
   ]
})
export class KendoModule { }
