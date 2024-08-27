import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
productlist:Array<{name:string,price:number}>;
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
}
}
