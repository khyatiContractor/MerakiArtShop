import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './product-list';
@Component({
  selector: 'pm-upload-img',
  templateUrl:'./product-imgUpload.component.html'
  //styleUrls: ['./product-upload.component.css']
})

export class ProductImgUploadComponent implements OnInit {

  profileImage: any = '../../../assets/images/person_edit.png';
  product : Products;
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
ngOnInit() {
  this.product = this.productService.getSavedProduct().getValue();
  this.productService.getSavedProduct().subscribe(
      (product) => {
          if (this.product.imageUrl) {
              this.profileImage = this.product.imageUrl;
          }
      }
  );
}
onArtEdit(event) {
  const selectedFiles: FileList = event.target.files;
  const file = selectedFiles.item(0);
  this.productService.addArtImage(this.product, file);
}
onUpload(){
  this.router.navigate(['/products']);
}
}
