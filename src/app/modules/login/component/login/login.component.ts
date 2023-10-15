import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { LoaderSize, LoaderThemeColor, LoaderType } from '@progress/kendo-angular-indicators';
import { SVGIcon, loginIcon } from '@progress/kendo-svg-icons';
import { LoginService } from '../../service/login.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationsService } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  pageTitle = 'Employee Login';

  // Form Login Properties
  loginButtonIcon: SVGIcon = loginIcon;
  loginCardTitle = 'Employee Login';
  loginCardSubtitle = 'Wholesale Employee Management Apps';
  loginForm: FormGroup;
  imgSrc = 'assets/img/logo/logo-wholesale.png';

  // Loader, Disable Input Form, Gray Input Color Properties
  isLoading: boolean = false;

  loaderProperties = {
    type: <LoaderType>"infinite-spinner",
    themeColor: <LoaderThemeColor>"primary",
    size: <LoaderSize>"medium"
  };

  // Notification Property
  content = '';
  style: any = '';

  constructor(
    private title: Title,
    private formBuilder: FormBuilder,
    private notificationService: NotificationsService,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
  }

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
      const formData: any = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      };

      of(null).pipe(
        delay(2000)
      ).subscribe(() => {
        this.loginService.loginUser(formData).subscribe((loginResponse: any) => {
          if (loginResponse.code != 200) {
            this.content = loginResponse.message;
            this.style = 'error';

            this.isLoading = false;

            this.showNotification();
          } else {
            this.content = loginResponse.message;
            this.style = 'success';

            this.isLoading = false;

            this.showNotification();
          }
        });
      });
    }
  }

  showNotification(): void {
    this.notificationService.showNotification(this.content, this.style);
  }
}
