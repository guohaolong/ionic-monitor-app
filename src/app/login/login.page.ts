import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = {
    userName: '',
    password: ''
  };
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.user);
    this.router.navigateByUrl('/tabs/tab1');
  }

}
