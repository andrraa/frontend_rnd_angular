import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wholesale Employee';

  // Hide Appbar in Login & Register Page
  isAuthPage = false;

  constructor(
    private setTitle: Title,
    private router: Router
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAuthPage = event.url == '/login' || event.url == '/register';
      }
    });
  }

  ngOnInit(): void {
    this.setTitle.setTitle(this.title);
  }
}
