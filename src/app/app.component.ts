import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Meraki Art';
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
