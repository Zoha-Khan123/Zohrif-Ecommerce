export interface ButtonProps {
  customStyle?: string;
  children: React.ReactNode;
}

export interface TodayProduct {
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

export interface CategoriesProduct {
  image: string;
  name: string;
}

export interface Services {
  image : string,
  heading : string ,
  paragraph : string,
}