import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Products } from './product-list';
import { HttpModule } from '@angular/http';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class ProductService {
  private productUrl = 'api/products/products.json';
  private fbStorage: AngularFireStorage;
  private basePath = '/art';

constructor(private http: HttpClient, private afStorage: AngularFireStorage
  ) {
    this.fbStorage = afStorage;
}
  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(this.productUrl).pipe(
      tap(data => console.log('All: '+ JSON.stringify(data))),
     catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<Products | undefined> {
    return this.getProducts().pipe(
      map((products: Products[]) => products.find(p => p.productId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }


    public addArtImage( file: File) {
      this.fbStorage.ref(`${this.basePath}/${file.name}`).put(file).then(
          snapshot => {
            snapshot.ref.getDownloadURL().then(((downloadURL) =>   {
              console.log("User Servicce Dowload Url: ");
              console.log(  downloadURL);
              /* this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({image: downloadURL});
              user.image = downloadURL;
              this.saveUser(user); */

            })).catch(
              (error)=>alert(error)
            );
              //ref.getDownloadURL().then((downloadURL) => console.log(downloadURL));


          }).catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
      });
  }
}
