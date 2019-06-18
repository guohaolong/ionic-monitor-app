import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { HttpClientService } from './http-client.service';
import { appApis } from './apis';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientService) { }

  login(user: User): Observable<any> {
    return this.http.post(appApis.login, user, { observe: 'response' }).map(res => {
      return res;
    });
  }

  getUser(): User {
    const user = sessionStorage.getItem('user');
    return JSON.parse(user);
  }

  isLoggedIn(): boolean {
    const user = sessionStorage.getItem('user');
    if (user) {
      return true;
    }

    return false;
  }
}

export interface User {
  userName: string;
  password: string;
}
