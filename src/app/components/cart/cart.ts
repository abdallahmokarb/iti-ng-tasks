import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
})
export class Cart {
  cart = signal<{ product: IProduct; quantity: number }[]>(
    JSON.parse(localStorage.getItem('cart') || '[]')
  );

  cartCount = computed(() =>
    this.cart().reduce((total, item) => total + item.quantity, 0)
  );

  increase(item: { product: IProduct; quantity: number }) {
    const updated = this.cart().map((cartItem) =>
      cartItem.product.id === item.product.id
        ? {
            ...cartItem,
            quantity: Math.min(cartItem.quantity + 1, cartItem.product.stock),
          }
        : cartItem
    );
    this.cart.set(updated);
    this.saveCart();
  }

  decrease(item: { product: IProduct; quantity: number }) {
    const updated = this.cart().flatMap((cartItem) => {
      if (cartItem.product.id === item.product.id) {
        const newQuantity = cartItem.quantity - 1;
        return newQuantity > 0 ? [{ ...cartItem, quantity: newQuantity }] : [];
      }
      return [cartItem];
    });
    this.cart.set(updated);
    this.saveCart();
  }

  remove(item: { product: IProduct; quantity: number }) {
    this.cart.set(
      this.cart().filter((cartItem) => cartItem.product.id !== item.product.id)
    );
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart()));
  }
  totalPrice = computed(() =>
    this.cart().reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  );
}
