import { Injectable } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private notificationService: NotificationService) { }

  showNotification(content: string, style: any): void {
    this.notificationService.show({
      content,
      cssClass: 'button-notification custom-notification',
      animation: {
        type: 'fade',
        duration: 300
      },
      position: {
        horizontal: "right",
        vertical: "top"
      },
      type: {
        style,
        icon: true
      },
      hideAfter: 4000
    });
  }
}
