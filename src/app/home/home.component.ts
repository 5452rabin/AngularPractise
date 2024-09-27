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
productlist:Array<{name:string,price:number}>;
productList1:Array<Product>=[];
categoryList:Array<Category>=[];
popupproduct:Product =null;
enablepopup:boolean=false;
constructor(private productservice:ProductsService,private categoryService:CategoryService){}
ngOnInit():void
{
this.loadProducts();
this.loadcategory();
}
loadcategory():void{
  this.categoryList=this.categoryService.getcategory();
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

}
