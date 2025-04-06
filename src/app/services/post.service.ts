import { inject, Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { posts } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  categoriesService = inject(CategoryService);

  getAll(): Post[] {
    return posts;
  }

  getById(id: string): Post | undefined {
    return posts.find((post) => post.id === id);
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

  /**
   * Creates a new post and adds it to the global `posts` array.
   * Generates a unique ID (UUID) and sets the current date automatically.
   *
   */
  createNewPost(post: Post): Post {
    const newPost: Post = { ...post, id: uuidv4(), date: new Date() };
    posts.push(newPost);
    return newPost;
  }

  /**
   * Deletes an existing post and returnes it.
   * If the post is not found, returns undefined.
   *
   * @param {id} string - The id of the post to be deleted
   */
  deletePost(id: string): Post | undefined {
    const index = posts.findIndex((post) => post.id === id);

    return posts.splice(index, 1)[0];
  }
}
