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

  getByFilters(
    input: string | null = null,
    category: string | null = null
  ): Post[] {
    return posts.filter((post) => {
      const matchesInput = input
        ? post.title.toLowerCase().includes(input.toLowerCase())
        : true;

      const matchesCategory = category
        ? post.category.title === category
        : true;

      return matchesInput && matchesCategory;
    });
  }
}
