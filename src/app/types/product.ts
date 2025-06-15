export interface Product {
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  isLiked?: boolean,
  views?: number;     
}