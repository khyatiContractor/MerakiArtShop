import {Component, OnInit} from '@angular/core';
import {Products} from './product-list';
import {ProductService} from './product.service';

@Component({
  templateUrl:'./product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  title: string='Art List';
  imagewidth:number= 100;
  imagemargin:number=2;
  showPrice: boolean = false;
  _listFilter: string ;
  errorMessage: string;
  filterproducts : Products[];
  products : Products[] = [];

constructor(private productService:ProductService){

}


  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.filterproducts=this.listFilter ? this.performeFilter(this.listFilter) : this.products;
  }

  togglePrice():void{
    this.showPrice = !this.showPrice;
  }

  performeFilter(filterBy:string ) :Products[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:Products)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  ngOnInit():void{
    this.productService.getProducts().subscribe(
      products =>{
         this.products = products;
           this.filterproducts = this.products;
      },
      error => this.errorMessage = <any>error

    );

  }



}
