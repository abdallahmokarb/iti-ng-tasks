// product-details.ts
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../models/IProduct';
import { DiscountPipe } from '../../discount.pipe';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink, DiscountPipe],
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {
  route = inject(ActivatedRoute);
  http = inject(HttpClient);

  product: IProduct | null = null;
  discountedPrice: number | null = null;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>('https://dummyjson.com/products').subscribe((res) => {
      this.product = res.products.find((p: any) => p.id == id);
    });

    if (this.product?.discountPercentage) {
      const discount = this.product.discountPercentage;
      const price = this.product.price;
      this.discountedPrice = price - (price * discount) / 100;
    }
  }
}
