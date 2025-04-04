import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  category: string | null = null;
  inputSearch: string = '';

  route = inject(ActivatedRoute);

  ngOnInit() {
    this.posts = this.postsService.getAll();

    this.route.queryParams.subscribe((params) => {
      this.category = params['category'];
      this.inputSearch = params['search'];
      this.posts = this.postsService.getByFilters(
        this.inputSearch,
        this.category
      );
    });
  }
}
