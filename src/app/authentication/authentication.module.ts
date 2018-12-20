import {NgModule} from '@angular/core';
import {AuthenticationRouting} from './authentication.routing';
import {SignupComponent} from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from '../services/user.service';
import {CommonModule} from '@angular/common';
import {ErrorAlertComponent} from '../shared/error-alert/error-alert.component';
import {PasswordEqualValidator} from '../utils/password-equal-validator.directive';
import {LoginComponent} from './login/login.component';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthenticationGuard} from '../services/authentication.guard';

/**
 * Authentication Module
 */
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AuthenticationRouting
    ],
    declarations: [
        SignupComponent,
        LoginComponent,
        ErrorAlertComponent,
        PasswordEqualValidator
    ],
    providers: [
      AngularFireAuth,
        AngularFireDatabase,
        AuthenticationService,
        AuthenticationGuard,
        UserService,
    ]
})
export class AuthenticationModule {
}
