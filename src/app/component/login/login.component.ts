import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  loginData: any = {
    username: '',
    password: ''
  }

  RegisterRoute() {
    this.route.navigate(['register']);
  }

  HomeRoute() {
    this.route.navigate(['home']);
  }

  LoginSubmit() {
    if (
      this.loginData.username &&
      this.loginData.password
    ) {
      this.userService.LoginUser(this.loginData).subscribe((response: any) => {
        alert(response.message);

        if (response.code == 200) {
          this.HomeRoute();
        }
      });
    } else {
      alert('Data Tidak Boleh Kosong!');
    }
  }
}
