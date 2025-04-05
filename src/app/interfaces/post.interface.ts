import { ICategory } from './category.interface';

export interface Post {
  id: string;
  title: string;
  text: string;
  author: string;
  image: string;
  date: Date;
  category: ICategory;
}
