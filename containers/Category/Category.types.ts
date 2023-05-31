import { IParamGetCategory } from '@/libraries/api/Category/Category.types';

export interface ICategory {
  id: number;
  name: string;
  icon: string;
  description: string;
  category_id: number;
}

export interface CategoryProps {
  readonly params?: IParamGetCategory;
}
