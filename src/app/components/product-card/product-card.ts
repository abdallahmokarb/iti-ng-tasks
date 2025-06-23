import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/IProduct';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input() product!: IProduct;
  @Input() cartQuantity: number = 0;
  @Output() addToCart = new EventEmitter<IProduct>();

  constructor(private router: Router) {}

  AddToCart() {
    if (this.cartQuantity < this.product.stock) {
      this.addToCart.emit(this.product);
    } else {
      alert('Cannot add more than stock');
    }
  }

  ViewDetails() {
    this.router.navigate(['/product', this.product.id]);
  }
}
