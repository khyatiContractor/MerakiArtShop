import {Component} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';

@Component({
    selector: 'pm-root',
    styleUrls: ['app.component.css'],
    templateUrl: './app.component.html',
})
export class AppComponent {

    authenticationService: AuthenticationService;

    constructor(private authService: AuthenticationService) {
        this.authenticationService = authService;
    }
}
