import {Component} from '@angular/core';
import {Products} from './product-list';
import {ProductService} from './product.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-upload-art',
  templateUrl:'./product-upload.component.html'
  //styleUrls: ['./product-upload.component.css']
})

export class ProductUploadComponent {

  msg: string;
  imageUrl: any;
  showError: boolean;
  fbStorage: AngularFireStorage;
  profileUrl: Observable<string | null>;

constructor(private authService: AuthenticationService,
  private router: Router,
  private afStorage: AngularFireStorage,
  private productService:ProductService) {
    this.fbStorage = afStorage;
}

onArtAdd(artData): void {
   // tslint:disable-next-line:no-shadowed-variable

     const products: Products = new Products(
                                  artData.value.productName,
                                  artData.value.releaseDate,
                                  artData.value.description,
                                  '',
                                  artData.value.price,
                                  artData.value.starRating,
                                  '');
                                  //products.imageUrl=this.imageUrl;
      //console.log("products Details");
      //console.log(products.imageUrl);
      this.writeNewProducts(products);
      this.router.navigate(['/pm-upload-img']);
      }

private writeNewProducts(products: Products): void {
  this.productService.addArt(products);
}


}
