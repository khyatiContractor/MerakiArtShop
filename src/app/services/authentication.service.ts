import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Authentication service
 *
 */
@Injectable()
export class AuthenticationService {

    /**
     * Constructor
     *
     * @param {AngularFireAuth} angularFireAuth provides the functionality related to authentication
     */
    constructor(private angularFireAuth: AngularFireAuth) {
    }

    public signup(email: string, password: string): Promise<any> {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    public login(email: string, password: string): Promise<any> {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    public resetPassword(email: string): Promise<any> {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    }

    public isAuthenticated(): boolean {
        const user = this.angularFireAuth.auth.currentUser;
        return user ? true : false;
    }

    public signout(): Promise<any>{
        return this.angularFireAuth.auth.signOut();
    }

    public changeEmail(email: string): Promise<any> {
        return this.angularFireAuth.auth.currentUser.updateEmail(email);
    }

    public changePassword(password: string): Promise<any> {
        return this.angularFireAuth.auth.currentUser.updatePassword(password);
    }
}