import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ICategory } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  categories: ICategory[] = [];
  selectedCategory: string = '';
  inputSearch: string = '';
  router = inject(Router);

  postsService = inject(PostService);
  categoriesService = inject(CategoryService);

  ngOnInit() {
    this.categories = this.categoriesService.getAll();
  }

  onchangeCategory($event: Event) {
    this.selectedCategory = ($event.target as HTMLSelectElement).value;
    this.router.navigate([], {
      queryParams: { category: this.selectedCategory || null },
      queryParamsHandling: 'merge',
    });
  }

  onInputSearch($event: Event) {
    this.inputSearch = ($event.target as HTMLSelectElement).value;
    this.router.navigate([], {
      queryParams: { search: this.inputSearch || null },
      queryParamsHandling: 'merge',
    });
  }
}
