import {Component} from '@angular/core';
import {User} from '../../services/user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {UserService} from '../../services/user.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-friends-login',
  styleUrls: ['login.component.css'],
  templateUrl: 'login.component.html',
})
export class LoginComponent {

  errorMessage: string;

  showError: boolean;

  private user: User;

  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthenticationService,
              private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.auth.onAuthStateChanged(user => {
      console.log("in authchange");
      if (user) {
        console.log("on authentication:"+user.uid);
        this.getUserInfo(user.uid);
      }
    });
  }

  onLogin(loginFormData): void {
    this.authService.login(loginFormData.value.email, loginFormData.value.password).then((user) => {
      // Login user
      const uid: string = user.user.uid;
      console.log("on login:"+ user.user);
      this.getUserInfo(uid);
      //this.router.navigate(['/welcome']);
    }).catch((error) => {
      this.errorMessage = error.message;
      this.showError = true;
    });
  }

  onReset(resetFormData): void {
    this.authService.resetPassword(resetFormData.value.email).then(() => {
      alert('Reset instruction sent to your mail');
    }).catch((error) => {
      this.errorMessage = error.message;
      this.showError = true;
    });
  }
  private navigateToUserProfile() {
    this.router.navigateByUrl('/app-friends-userprofile');
}

private getUserInfo(uid: string) {
    this.userService.getUser(uid).subscribe(snapshot => {
        this.user = snapshot;
        this.userService.saveUser(this.user);
        console.log("snap:");
        console.log(snapshot);
        this.navigateToUserProfile();
    });
}
}
