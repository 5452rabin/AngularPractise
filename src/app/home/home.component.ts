import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../shared/model/product';
import { CategoryService } from '../services/category.service';
import { Category } from '../shared/model/category';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

productList1:Array<Product>=[];
productList:Array<Product>=[];
searchterm:string='';
issearchemppty:boolean=true;
popupproduct:Product =null;
enablepopup:boolean=false;
p: number = 1;

constructor(private productservice:ProductsService){}
ngOnInit():void
{
this.loadProducts();

}

loadProducts(): void {
  // Data insertion can be done here
    
  this.productList1=this.productservice.getproducts();
  
}
popup(product:Product){
this.popupproduct=product;
this.enablepopup=true;
console.log(this.popupproduct);

}
popdown(){
this.enablepopup=false;
}
filterproduct():Array<Product>
{
  if (!this.searchterm) {
    this.issearchemppty=false;
    return this.productList1;
  }
  this.productList=this.productList1.filter(p=>p.title.toLowerCase().includes(this.searchterm.toLowerCase()));
  if(this.productList==null)
  {
    this.issearchemppty=true;
  }
  return this.productList;

}
onSearchTermChange(term:string):void{
  this.searchterm=term;
}
}
