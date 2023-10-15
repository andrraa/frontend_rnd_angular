import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { SVGIcon, logoutIcon } from '@progress/kendo-svg-icons';
import { LoaderSize, LoaderThemeColor, LoaderType } from '@progress/kendo-angular-indicators';
import { NotificationsService } from 'src/app/shared/services/notification/notification.service';
import { RegisterService } from '../../service/register.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  pageTitle = 'Employee Register'

  // Form Properties
  imgSrc = 'assets/img/logo/logo-wholesale.png';
  registerForm: FormGroup;
  registerCardTitle = 'Employee Register';
  registerCardSubtitle = 'Wholesale Employee Management Apps';
  registerButtonIcon: SVGIcon = logoutIcon;

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
    private formBuilder: FormBuilder,
    private title: Title,
    private notificationService: NotificationsService,
    private registerService: RegisterService,
    private route: Router
  ) {
    this.registerForm = this.formBuilder.group({
      registerNamaLengkap: ['', Validators.required],
      registerNPP: ['', Validators.required],
      registerDivisi: ['', Validators.required],
      registerKelompok: ['', Validators.required],
      registerUsername: ['', Validators.required],
      registerPassword: ['', Validators.required]
    });
  };

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
  }

  onSubmit() {
    this.isLoading = true;

    const controlNamaLengkap = this.registerForm.get('registerNamaLengkap');
    const controlNPP = this.registerForm.get('registerNPP');
    const controlDivisi = this.registerForm.get('registerDivisi');
    const controlKelompok = this.registerForm.get('registerKelompok');
    const controlUsername = this.registerForm.get('registerUsername');
    const controlPassword = this.registerForm.get('registerPassword');

    if (
      !controlNamaLengkap!.valid ||
      !controlNPP!.valid ||
      !controlDivisi!.valid ||
      !controlKelompok!.valid ||
      !controlUsername!.valid ||
      !controlPassword!.valid
    ) {
      this.content = 'Harap Mengisi Semua Field!';
      this.style = 'error';

      this.isLoading = false;
      this.showNotification();
    } else {
      const registerData: any = {
        username: this.registerForm.get('registerUsername')?.value,
        password: this.registerForm.get('registerPassword')?.value,
        nama: this.registerForm.get('registerNamaLengkap')?.value,
        npp: this.registerForm.get('registerNPP')?.value,
        divisi: this.registerForm.get('registerDivisi')?.value,
        kelompok: this.registerForm.get('registerKelompok')?.value
      }

      of(null).pipe(
        delay(2000)
      ).subscribe(() => {
        this.registerService.registerUser(registerData).subscribe((registerResponse: any) => {
          if (registerResponse.code != 200) {
            this.content = registerResponse.message;
            this.style = 'error';

            this.isLoading = false;
            this.showNotification();
          } else {
            this.content = registerResponse.message;
            this.style = 'success';

            this.isLoading = false;
            this.showNotification();
            this.route.navigate(['/login']);
          }
        });
      });
    }
  }

  showNotification(): void {
    this.notificationService.showNotification(this.content, this.style);
  }
}
