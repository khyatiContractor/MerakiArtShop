import {Component} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'pm-root',
    styleUrls: ['app.component.css'],
    templateUrl: './app.component.html',
})
export class AppComponent {

    authenticationService: AuthenticationService;

    constructor(private authService: AuthenticationService,
      private router: Router) {
        this.authenticationService = authService;
    }

    onLogout(): void {
      this.authService.signout().then(() => {
          this.navigateToLogin();
      });
  }

  navigateToLogin() {
      this.router.navigateByUrl('/app-friends-login');
  }
}
