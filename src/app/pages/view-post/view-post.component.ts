import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Notyf } from 'notyf';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-view-post',
  imports: [DatePipe],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
})
export class ViewPostComponent {
  // gets the idPost from the url
  @Input() idPost: string = '';
  post: Post | undefined = undefined;
  postsService = inject(PostService);
  router = inject(Router);
  notyf: Notyf;

  ngOnInit() {
    // uses the idPost to fetch post data
    this.post = this.postsService.getById(this.idPost);
  }

  constructor() {
    this.notyf = new Notyf();
  }

  // if the image is not loaded, show a default image
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'images/no-image-available.jpg';
  }

  onClick(id: string) {
    const deletedPost = this.postsService.deletePost(id);

    // Notify the user about the deletion status
    if (deletedPost)
      this.notyf.success({
        message: 'Post deleted successfully!',
        background: '#9b59b6',
      });
    else this.notyf.error('There was an error deleting the post!');

    this.router.navigate(['/home']);
  }
}
