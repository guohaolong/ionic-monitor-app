import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: boolean;
  user: User;

  constructor() { }

  login(user: User): void {
    this.user = user;
    this.authState = true;
  }

  isLoggedIn(): boolean {
    return this.authState;
  }
}

export interface User {
  userName: string;
  password: string;
}
