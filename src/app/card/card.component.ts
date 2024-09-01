import { Component, Input } from '@angular/core';
import { Product } from '../shared/model/product';
import { ProductsService } from '../services/products.service';
declare var $: any; // Ensure jQuery is available

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: any;
  selectedProduct: Product | undefined;

  constructor(private productService: ProductsService) {}

  popup(productId: number): void {
    // Fetch the product details using the product ID
    this.selectedProduct = this.productService.getproduct(productId);
    
    if (this.selectedProduct) {
      // Show the Bootstrap modal
      $('#productModal').modal('show');
    } else {
      console.error('Product not found');
    }
  }

  closeModal(): void {
    // Hide the Bootstrap modal
    this.selectedProduct=null;
    $('#productModal').modal('hide');
  }
}
