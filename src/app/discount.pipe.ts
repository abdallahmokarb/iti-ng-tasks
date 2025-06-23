import { Pipe } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe {
  transform(price: number, discount: number): number {
    if (!discount || discount <= 0) return price;
    return price - (price * discount) / 100;
  }
}
