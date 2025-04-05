import { Injectable } from '@angular/core';
import { posts } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getAll(): Post[] {
    return posts;
  }

  /**
   * Filters an array of posts based on input text (title match) and/or category.
   * If no filters are provided, returns all posts.
   *
   * @param {string | null} input - Search string to match against post titles (case-insensitive).
   *                               If null or empty, this filter is ignored.
   * @param {string | null} category - Category name to match exactly.
   *                                  If null or empty, this filter is ignored.
   * @returns {Post[]} Array of posts that match ALL provided filters.
   */
  getByFilters(
    input: string | null = null,
    category: string | null = null
  ): Post[] {
    return posts.filter((post) => {
      // Check if post title includes input text (if input is provided)
      const matchesInput = input
        ? post.title.toLowerCase().includes(input.toLowerCase())
        : true; // No input filter → always matches

      // Check if post category matches exactly (if category is provided)
      const matchesCategory = category
        ? post.category.title === category
        : true; // No category filter → always matches

      // Post must match both conditions (if they were provided)
      return matchesInput && matchesCategory;
    });
  }

  getById(id: string): Post | undefined {
    return posts.find((post) => post.id === id);
  }
}
