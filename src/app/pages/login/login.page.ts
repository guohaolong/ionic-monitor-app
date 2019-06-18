import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLogining: boolean;

  user: User = {
    userName: 'admin',
    password: '123456'
  };


  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.isLogining = true;
    this.authService.login(this.user).subscribe(response => {
      if (response && response.status === 200) {
        this.router.navigateByUrl('/tabs/home');
      }
    }, error => {
      console.error(error);
      this.isLogining = false;
    }, () => {
      this.isLogining = false;
    });
  }

}
