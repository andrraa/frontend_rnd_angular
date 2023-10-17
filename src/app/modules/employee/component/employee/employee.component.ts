import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SVGIcon, plusIcon, trashIcon, eyedropperIcon } from '@progress/kendo-svg-icons';
import { EmployeeService } from '../../service/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderSize, LoaderThemeColor, LoaderType } from '@progress/kendo-angular-indicators';
import { NotificationsService } from 'src/app/shared/services/notification/notification.service';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeComponent implements OnInit {
  buttonIcon: SVGIcon = plusIcon;
  buttonDeleteIcon: SVGIcon = trashIcon;
  buttonEditIcon: SVGIcon = eyedropperIcon;

  employeeData: any;
  employeeForm: FormGroup;

  // Loader
  isLoading = false;

  loaderProperties = {
    type: <LoaderType>"infinite-spinner",
    themeColor: <LoaderThemeColor>"primary",
    size: <LoaderSize>"medium"
  };

  // Notification Property
  content = '';
  style: any = '';

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationsService
  ) {
    this.employeeForm = this.formBuilder.group({
      employeeNama: ['', Validators.required],
      employeeNPP: ['', Validators.required],
      employeeDivisi: ['', Validators.required],
      employeeKelompok: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadEmployee();
  }

  // REST API
  loadEmployee() {
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.employeeData = data;
    });
  }

  deleteItem(dataItem: any) {

  }

  editItem(dataItem: any) {

  }

  // Dialog
  isDialogOpen = false;

  openDialog(): void {
    this.resetForm();
    this.isDialogOpen = true;
  }

  closeDialog(): void {
    this.resetForm();
    this.isDialogOpen = false;
  }

  // Dialog Form
  onSubmit() {
    this.isLoading = true;

    const controlNama = this.employeeForm.get('employeeNama');
    const controlNPP = this.employeeForm.get('employeeNPP');
    const controlDivisi = this.employeeForm.get('employeeDivisi');
    const controlKelompok = this.employeeForm.get('employeeKelompok');

    if (
      !controlNama!.valid ||
      !controlNPP!.valid ||
      !controlDivisi!.valid ||
      !controlKelompok!.valid
    ) {
      this.content = 'Harap Mengisi Semua Field!';
      this.style = 'error';

      this.isLoading = false;
      this.showNotification();
    } else {
      const employeeData: any = {
        username: this.employeeForm.get('employeeNPP')?.value,
        password: this.employeeForm.get('employeeNPP')?.value,
        nama: this.employeeForm.get('employeeNama')?.value,
        npp: this.employeeForm.get('employeeNPP')?.value,
        divisi: this.employeeForm.get('employeeDivisi')?.value,
        kelompok: this.employeeForm.get('employeeKelompok')?.value
      }

      of(null).pipe(
        delay(2000)).subscribe(() => {
          this.employeeService.addEmployee(employeeData).subscribe((e: any) => {
            if (e.code != 200) {
              this.content = e.message;
              this.style = 'error';

              this.isLoading = false;
              this.showNotification();
            } else {
              this.content = 'Berhasil Menambahkan Data!';
              this.style = 'success';

              this.resetForm();
              this.isLoading = false;
              this.isDialogOpen = false;
              this.loadEmployee();
              this.showNotification();
            }
          });
        });
    }
  }

  // Reset Form
  resetForm() {
    this.employeeForm.reset();
  }

  // Kendo Notification
  showNotification(): void {
    this.notificationService.showNotification(this.content, this.style);
  }
}
