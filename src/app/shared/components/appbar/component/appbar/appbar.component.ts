import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderSize, LoaderThemeColor, LoaderType } from '@progress/kendo-angular-indicators';
import { AppBarPositionMode } from '@progress/kendo-angular-navigation';
import { SVGIcon, loginIcon } from '@progress/kendo-svg-icons';
import { delay, of } from 'rxjs';
import { LogoutService } from 'src/app/core/services/logout/logout.service';
import { NotificationsService } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppbarComponent {
  // Appbar Properties
  appbarImg = "assets/img/logo/logo-wholesale.png";
  appbarLogoutIcon: SVGIcon = loginIcon;
  appbarPositionMode: AppBarPositionMode = "sticky";

  // Dialog Condition
  isDialogOpen = false;

  // Kendo Notification Properties
  content: string = '';
  style: string = '';

  // Loader, Disable Input Form, Gray Input Color Properties
  isLoading: boolean = false;

  loaderProperties = {
    type: <LoaderType>"infinite-spinner",
    themeColor: <LoaderThemeColor>"primary",
    size: <LoaderSize>"medium"
  };

  constructor(
    private route: Router,
    private logoutService: LogoutService,
    private notificationService: NotificationsService
  ) { }

  // Logout with Kendo Dialog
  logoutAccount() {
    this.isLoading = true;

    of(null).pipe(
      delay(500)
    ).subscribe(() => {
      this.logoutService.logoutAccount().subscribe((response: any) => {
        if (response.success == true) {
          this.content = 'Berhasil Logout';
          this.style = 'success';
          this.isLoading = false;

          localStorage.clear();
          this.route.navigate(['/login']);
          this.showNotification();
        } else {
          this.content = 'Gagal Logout';
          this.style = 'error';
          this.isLoading = false;

          this.showNotification();
        }
      });
    });
  }

  openLogoutDialog() {
    this.isDialogOpen = !this.isDialogOpen;
  }

  closeLogoutDialog() {
    this.isDialogOpen = !this.isDialogOpen;
  }

  preventCloseDialog() {
    if (this.isLoading != true) {
      this.closeLogoutDialog();
    }
  }

  // Kendo Notification
  showNotification(): void {
    this.notificationService.showNotification(this.content, this.style);
  }
}
