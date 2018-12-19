import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {User} from './user';
import 'firebase/storage';
import {USERS_CHILD} from './database-constants';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/**
 * User service
 *
 */
@Injectable()
export class UserService {

    private subject: BehaviorSubject<User> = new BehaviorSubject(null);
    private fbStorage: AngularFireStorage;
    private basePath = '/profile';
    /**
     * Constructor
     *
     * @param {AngularFireDatabase} fireDb provides the functionality for Firebase Database
     */
    constructor(private fireDb: AngularFireDatabase,
      private afStorage: AngularFireStorage) {
        this.fbStorage = afStorage;
}

    public addUser(user: User): void {
        this.fireDb.object(`${USERS_CHILD}/${user.uid}`).set(user);
        this.saveUser(user);
    }

    public getUser(uid: string): Observable<User> {
      console.log("get user service: "+uid);
      return this.fireDb.object<User>(`${USERS_CHILD}/${uid}`).valueChanges();
  }


    public saveUser(user: User) {
        this.subject.next(user);
    }

    public getSavedUser(): BehaviorSubject<User> {
        return this.subject;
    }


     public updateEmail(user: User, newEmail: string): void {
        this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({email: newEmail});
        this.saveUser(user);
    }

    public updateMobile(user: User, mobile: string): void {
        this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({mobile: mobile});
        this.saveUser(user);
    }

    public updateName(user: User, name: string): void {
        this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({name: name});
        this.saveUser(user);
    }

    public addProfileImage(user: User, file: File) {
      this.fbStorage.ref(`${this.basePath}/${file.name}`).put(file).then(
          snapshot => {
            snapshot.ref.getDownloadURL().then(((downloadURL) =>   {
              console.log("User Servicce Dowload Url: ");
              console.log(  downloadURL);
              this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({image: downloadURL});
              user.image = downloadURL;
              this.saveUser(user);

            }));
              //ref.getDownloadURL().then((downloadURL) => console.log(downloadURL));


          }).catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
      });
  }
}
