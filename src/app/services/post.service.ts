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
}
