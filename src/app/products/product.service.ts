import { AngularFireDatabase, AngularFireList   } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { Products } from './product-list';
import { AngularFireStorage } from 'angularfire2/storage';
import {PRODUCT_CHILD } from '.././services/database-constants';
import { Router } from '@angular/router';

@Injectable()
export class ProductService {
  private productUrl = 'api/products/products.json';
  private fbStorage: AngularFireStorage;
  private basePath = '/art';
  subject: BehaviorSubject<Products> = new BehaviorSubject(null);
  productArt: AngularFireList <any>;


constructor(private http: HttpClient,
  private afStorage: AngularFireStorage,
  private fireDb: AngularFireDatabase,
  private router: Router,
  ) {
    this.fbStorage = afStorage;
    this.productArt = this.fireDb.list(this.basePath);
}
 getProducts(): Observable<Products[]>{

  return this.fireDb.list<Products>
  (`${PRODUCT_CHILD}/`).valueChanges();
  }


  public addArt(product: Products): void {
    let ref=this.productArt.push(product);

      this.productArt.update(ref.key, {productId: ref.key});
      product.productId=ref.key;
    this.saveproduct(product);

}

  getProduct(id: any): Observable<any> {
        return this.fireDb.object( `${PRODUCT_CHILD}/${id}`).valueChanges();
  }
  public getSavedProduct(): BehaviorSubject<Products> {
    return this.subject;
}
  public saveproduct(product: Products) {
    this.subject.next(product);
}

  private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
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
              this.fireDb.object(`${PRODUCT_CHILD}/${product.productId}`).update({imageUrl: downloadURL});
               this.saveproduct(product);

            });
          });
  }
}
