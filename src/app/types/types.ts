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

export type AuthFormProps = {
  title: string;
  subtitle: string;
  mainButtonLabel: string;
  showGoogle: boolean;
  showForgot: boolean;
  redirectText: string;
  redirectLinkLabel: string;
  redirectPath: string;
  imageSrc: string;
  imageAlt?: string;
};
