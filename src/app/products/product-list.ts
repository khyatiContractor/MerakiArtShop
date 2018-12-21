export class Products{
  productName:string;
     productId: string;
      releaseDate: string;
      description: string;
      price: number;
      starRating: number;
      imageUrl: any;

      constructor(
        productName:string,
        releaseDate: string,
        description: string,
       productId: string,
        price: number,
        starRating: number,
        imageUrl: any) {
                this.productName=productName;
                this.releaseDate = releaseDate;
                this.description = description;
               this.productId = productId;
                this.price = price;
                this.starRating = starRating;
                this.imageUrl = imageUrl;
                }

}
