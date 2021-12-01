import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { 
    
  }

  login() {
    console.log('TRUE')
    this.cookieService.set('user', 'TRUE');
  }

  logout() {
    this.cookieService.delete('user');
  }

  isLogin(): Boolean {
    return Boolean(this.cookieService.get('user'));
  }
}
