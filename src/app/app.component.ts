import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wholesale Employee';

  constructor(private setTitle: Title) { }

  ngOnInit(): void {
    this.setTitle.setTitle(this.title);
  }
}
