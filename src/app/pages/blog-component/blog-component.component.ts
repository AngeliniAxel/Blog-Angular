import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog-component',
  imports: [DatePipe],

  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.css',
})
export class BlogComponentComponent {
  posts: Post[] | undefined;

  postsService = inject(PostService);

  ngOnInit() {
    this.posts = this.postsService.getAll();
  }
}
