import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiurl:string="https://fakestoreapi.com/products";
  data:any;
  data1:any=[];
  productList:Array<Product>=[];
  constructor(private httpclient:HttpClient) { }
  getproducts():any
  {
    this.httpclient.get(this.apiurl).subscribe((res)=>{
      // console.log([res]);
  
      this.data=res;
      this.data.forEach(element => {
        const product: Product = {
          id: element.id,
          title: element.title,
          price: element.price,
          description: element.description,
          category: element.category,
          image: element.image
        };
        this.productList.push(product);
      });
      
      
    });
   

    return this.productList;

  }
}
