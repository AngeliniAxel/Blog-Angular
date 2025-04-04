import { ICategory } from './category.interface';

export interface Post {
  id: number;
  title: string;
  text: string;
  author: string;
  image: string;
  date: Date;
  category: ICategory;
}
