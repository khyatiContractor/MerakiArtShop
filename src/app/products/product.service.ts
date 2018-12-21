import { AngularFireDatabase, AngularFireList   } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Products } from './product-list';
import { HttpModule } from '@angular/http';
import { AngularFireStorage } from 'angularfire2/storage';
import {PRODUCT_CHILD } from '.././services/database-constants';

@Injectable()
export class ProductService {
  private productUrl = 'api/products/products.json';
  private fbStorage: AngularFireStorage;
  private basePath = '/art';
  subject: BehaviorSubject<Products> = new BehaviorSubject(null);
  //productId: string;
  productArt: AngularFireList <any>;


constructor(private http: HttpClient,
  private afStorage: AngularFireStorage,
  private fireDb: AngularFireDatabase
  ) {
    this.fbStorage = afStorage;
    this.productArt = this.fireDb.list(this.basePath);
}
 getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(this.productUrl).pipe(
      tap(data => console.log('All: '+ JSON.stringify(data))),
     catchError(this.handleError)
    );
  }


  public addArt(product: Products): void {
    //this.productId=this.fireDb.createPushId();
    //this.fireDb.object(`${PRODUCT_CHILD }/${this.productId}`).set(product);
    let ref=this.productArt.push(product);

      this.productArt.update(ref.key, {productId: ref.key});
      product.productId=ref.key;
    this.saveproduct(product);

}

  getProduct(id: number): Observable<Products | undefined> {
    return this.getProducts().pipe(
      map((products: Products[]) => products.find(p => true //p.productId === id
        ))
    );
  }
  public getSavedProduct(): BehaviorSubject<Products> {
    return this.subject;
}
  public saveproduct(product: Products) {
    this.subject.next(product);
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


    public addArtImage( product: Products, file: File){
      this.fbStorage.ref(`${this.basePath}/${file.name}`).put(file).then(
          snapshot => {
            snapshot.ref.getDownloadURL().then((downloadURL) =>   {
              //console.log(product.productId);
              console.log(downloadURL);
              console.log(product);
              this.fireDb.object(`${PRODUCT_CHILD}/${product.productId}`).update({imageUrl: downloadURL});
              //this.productArt.update(`${this.productId}`,{imageUrl: downloadURL});
              //product.imageUrl = downloadURL;
              //console.log(product.imageUrl);
              this.saveproduct(product);

            });
          });
  }
}
