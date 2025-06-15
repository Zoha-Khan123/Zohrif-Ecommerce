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

export interface ButtonProps {
  customStyle?: string;
  children: React.ReactNode;
}