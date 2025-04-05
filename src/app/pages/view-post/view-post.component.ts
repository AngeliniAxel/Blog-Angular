import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
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

  ngOnInit() {
    // uses the idPost to fetch post data
    this.post = this.postsService.getById(this.idPost);
  }
}
