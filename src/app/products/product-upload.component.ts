import {Component} from '@angular/core';
import {Products} from './product-list';
import {ProductService} from './product.service';

@Component({
  selector: 'pm-upload-art',
  templateUrl:'./product-upload.component.html',
  //styleUrls: ['./product-upload.component.css']
})

export class ProductUploadComponent {


constructor(private productService:ProductService){

}


onArtEdit(event) {
  const selectedFiles: FileList = event.target.files;
  const file = selectedFiles.item(0);
  this.productService.addArtImage(file);
}
}
