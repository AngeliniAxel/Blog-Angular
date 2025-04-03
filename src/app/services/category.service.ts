import { Injectable } from '@angular/core';
import { posts } from '../db/posts.db';
import { ICategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getAll(): ICategory[] {
    const arrCategories = posts.map((post) => post.category);
    const uniqueMap = new Map<number, ICategory>();
    arrCategories.forEach((cat) => uniqueMap.set(cat.id, cat));
    return Array.from(uniqueMap.values());
  }
}
