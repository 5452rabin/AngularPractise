import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../shared/model/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
productlist:Array<{name:string,price:number}>;
productList1:Array<Product>=[];
constructor(private productservice:ProductsService){}
ngOnInit():void
{
this.loadProducts();
}
loadProducts(): void {
  // Data insertion can be done here
  this.productlist = [
    { name: 'Product 1', price: 29.99 },
    { name: 'Product 2', price: 39.99 },
    { name: 'Product 3', price: 49.99 }
  ];
  this.productList1=this.productservice.getproducts();
}
}
