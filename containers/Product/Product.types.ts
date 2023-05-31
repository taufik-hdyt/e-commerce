import { IParamGetProduct } from '@/libraries/api/Product/Product.types';

export interface IProduct {
  id: number;
  slug: string;
  name: string;
  label_id: number;
  price: number;
  description: string;
  image: string;
}
export interface ProductProps {
  readonly params?: IParamGetProduct;
}
