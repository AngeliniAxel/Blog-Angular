import { Component, inject, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-view-post',
  imports: [],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
})
export class ViewPostComponent {
  @Input() idPost: string = '';
  post: Post | undefined = undefined;
  postsService = inject(PostService);

  ngOnInit() {
    this.post = this.postsService.getById(Number(this.idPost));
  }
}
