import { Component, DoCheck, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'Employee WEL Management';
  isMenuVisible = true;

  constructor(
    private route: Router,
    private titleService: Title
  ) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  ngDoCheck(): void {
    const currentRoute = this.route.url;

    if (currentRoute == '/login' || currentRoute == '/register' || currentRoute == '/') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }

  isPageActive(pageName: string) {
    const currentPage = this.route.url;

    return currentPage.includes(pageName) || (currentPage === '/' && pageName === 'home');
  }

  Logout() {
    this.route.navigate(['/login']);
  }
}
