import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthService){}

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout()
  }

  isLogin(): Boolean {
    return this.auth.isLogin();
  }
}
