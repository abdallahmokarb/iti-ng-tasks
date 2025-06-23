import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductCard } from '../product-card/product-card';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './products-list.html',
})
export class ProductsList implements OnInit {
  http = inject(HttpClient);
  products: IProduct[] = [];

  cart: { product: IProduct; quantity: number }[] = [];

  ngOnInit() {
    this.http.get<any>('https://dummyjson.com/products').subscribe((res) => {
      this.products = res.products.map((p: any) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        price: p.price,
        stock: p.stock,
        rating: Math.round(p.rating),
        thumbnail: p.thumbnail,
        images: p.images,
        quantity: 0,
      }));
    });
  }

  addToCart(product: IProduct) {
    const item = this.cart.find((p) => p.product.id === product.id);
    if (item) item.quantity++;
    else this.cart.push({ product, quantity: 1 });

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  get cartCount(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }
  getQuantityInCart(productId: number): number {
    const item = this.cart.find((p) => p.product.id === productId);
    return item ? item.quantity : 0;
  }

  increase(product: IProduct) {
    const item = this.cart.find((p) => p.product.id === product.id);
    if (item && item.quantity < product.stock) {
      item.quantity++;
    } else {
      alert('sorry .. not enough stock available');
    }
  }

  decrease(product: IProduct) {
    const item = this.cart.find((p) => p.product.id === product.id);
    if (item && item.quantity > 1) item.quantity--;
    else this.remove(product);
  }

  remove(product: IProduct) {
    this.cart = this.cart.filter((p) => p.product.id !== product.id);
  }
}
