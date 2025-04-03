import { Component, inject } from '@angular/core';
import { CardPostComponent } from '../../components/card-post/card-post.component';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  imports: [CardPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  posts: Post[] | undefined;

  postsService = inject(PostService);

  ngOnInit() {
    this.posts = this.postsService.getAll();
  }
}
