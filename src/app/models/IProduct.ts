export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  thumbnail: string;
  images: string;
  quantity: number;
  brand: string;
  category: string;
  discountPercentage?: number;
}
