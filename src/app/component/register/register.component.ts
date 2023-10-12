import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  registerData: any = {
    username: '',
    password: '',
    nama: '',
    npp: null,
    divisi: '',
    kelompok: ''
  }

  redirectLogin() {
    this.route.navigate(['login']);
  }

  RegisterSubmit() {
    if (
      this.registerData.username &&
      this.registerData.password &&
      this.registerData.nama &&
      this.registerData.npp &&
      this.registerData.divisi &&
      this.registerData.kelompok
    ) {
      this.userService.RegisterUser(this.registerData).subscribe((response: any) => {
        alert(response.message);

        if (response.code == 200) {
          this.redirectLogin();
        }
      });
    } else {
      alert('Data Tidak Boleh Kosong!');
    }
  }

}
