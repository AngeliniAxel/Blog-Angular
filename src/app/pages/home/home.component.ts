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
  category: string | null = null;
  inputSearch: string = '';

  postsService = inject(PostService);

  route = inject(ActivatedRoute);

  ngOnInit() {
    // fetches posts data from the service
    this.posts = this.postsService.getAll();

    // listens to query params changes
    this.listenToQueryParams();
  }

  /**
   * Listens to changes in the URL query parameters (search and category filters).
   * Updates component state and triggers post filtering when params change.
   *
   */
  listenToQueryParams(): void {
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'] || null;
      this.inputSearch = params['search'] || '';

      // Apply filters to posts based on new params
      this.filterPosts();
    });
  }

  // Applies current search and category filters to update visible posts
  filterPosts(): void {
    this.posts = this.postsService.getByFilters(
      this.inputSearch,
      this.category
    );
  }
}
