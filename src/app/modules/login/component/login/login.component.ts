import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { LoaderSize, LoaderThemeColor, LoaderType } from '@progress/kendo-angular-indicators';
import { SVGIcon, loginIcon } from '@progress/kendo-svg-icons';
import { LoginService } from '../../service/login.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationsService } from 'src/app/shared/services/notification/notification.service';

import { LoginData, LoginResponse } from '../../model/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  // Page Title
  pageTitle = 'Employee Login';

  // Form Login Properties
  imgSrc = 'assets/img/logo/logo-wholesale.png';
  loginButtonIcon: SVGIcon = loginIcon;
  loginCardTitle = 'Employee Login';
  loginCardSubtitle = 'Wholesale Employee Management Apps';
  loginForm: FormGroup;

  // Loader, Disable Input Form, Gray Input Color Properties
  isLoading: boolean = false;

  loaderProperties = {
    type: <LoaderType>"infinite-spinner",
    themeColor: <LoaderThemeColor>"primary",
    size: <LoaderSize>"medium"
  };

  // Notification Property
  content: string = '';
  style: string = '';

  constructor(
    private title: Title,
    private formBuilder: FormBuilder,
    private notificationService: NotificationsService,
    private loginService: LoginService,
    private route: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
  }

  // Form Submit
  onSubmit() {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');

    this.isLoading = true;

    if (!usernameControl!.valid || !passwordControl!.valid) {
      this.content = 'Username / Password Tidak Boleh Kosong!'
      this.style = 'error';

      this.isLoading = false;

      this.showNotification();
    } else {
      const dataLogin: LoginData = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      };

      of(null).pipe(
        delay(500)
      ).subscribe(() => {
        this.loginService.loginUser(dataLogin).subscribe((loginResponse: LoginResponse) => {
          if (loginResponse.success !== true) {
            this.content = loginResponse.message;
            this.style = 'error';

            this.isLoading = false;
            this.showNotification();
          } else {
            this.content = 'Login Sukses, Selamat Datang!';
            this.style = 'success';

            localStorage.setItem('token', loginResponse.token);
            localStorage.setItem('refresh', loginResponse.refresh);

            this.isLoading = false;
            this.showNotification();
            this.route.navigate(['/home']);
          }
        });
      });
    }
  }

  // Display Notification
  showNotification(): void {
    this.notificationService.showNotification(this.content, this.style);
  }
}

