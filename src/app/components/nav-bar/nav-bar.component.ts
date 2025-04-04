import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ICategory } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  categories: ICategory[] = [];
  selectedCategory: ICategory | null = null;
  router = inject(Router);

  postsService = inject(PostService);
  categoriesService = inject(CategoryService);

  ngOnInit() {
    this.categories = this.categoriesService.getAll();
  }

  onchangeCategory($event: Event) {
    const category = ($event.target as HTMLSelectElement).value;
    this.router.navigate([], {
      queryParams: { category: category || null },
      queryParamsHandling: 'merge',
    });
  }
}
