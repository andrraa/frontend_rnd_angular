import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppBarPositionMode } from '@progress/kendo-angular-navigation';
import { SVGIcon, menuIcon, loginIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppbarComponent {
  appbarImg = "assets/img/logo/logo-wholesale.png";
  appbarMenuIcon: SVGIcon = menuIcon;
  appbarPositionMode: AppBarPositionMode = "sticky";

  buttonIcon: SVGIcon = loginIcon;

  constructor(
    private route: Router
  ) { }

  RouteLogin() {
    this.route.navigate(['login']);
  }
}
