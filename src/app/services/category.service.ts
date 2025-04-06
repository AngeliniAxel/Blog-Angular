import { Injectable } from '@angular/core';
import { posts } from '../db/posts.db';
import { ICategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  /**
   * Retrieves all unique categories from the posts array.
   *
   * @returns {ICategory[]} An array of unique category objects.
   */
  getAll(): ICategory[] {
    // Extract all categories from the posts array
    const arrCategories = posts.map((post) => post.category);

    // Use a Map to store unique categories by their ID
    const uniqueMap = new Map<number, ICategory>();

    // Iterate through the categories and add them to the Map (ensures uniqueness by ID)
    arrCategories.forEach((cat) => uniqueMap.set(cat.id, cat));

    // Convert the Map values back to an array and return the unique categories
    return Array.from(uniqueMap.values());
  }

  getByTitle(title: string): ICategory {
    // Find and return the category with the specified title
    return this.getAll().find((cat) => cat.title === title) as ICategory;
  }
}
