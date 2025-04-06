import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import * as bootstrap from 'bootstrap';
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
    // Initialize filter controls with empty values
    this.selectedCategory = '';
    this.inputSearch = '';

    // Load all available categories from service
    this.categories = this.categoriesService.getAll();

    // Reset query parameters
    this.router.navigate([], {
      queryParams: { category: null, search: null },
      queryParamsHandling: 'merge',
    });
  }

  get isHomeRoute(): boolean {
    return this.router.url.includes('/home');
  }

  /**
   *  Extracts new category value from select element
   *  Updates URL with new category parameter or removes if null/empty
   *  Closes any open off-canvas navigation
   *
   * @param $event - The change event from the HTML select element
   *
   */
  onchangeCategory($event: Event) {
    this.selectedCategory = ($event.target as HTMLSelectElement).value;
    this.router.navigate([], {
      queryParams: { category: this.selectedCategory || null },
      queryParamsHandling: 'merge',
    });

    // Close mobile/off-canvas menu if open
    this.closeOffCanvas();
  }

  /**
   *  Captures the current search term from the input element
   *  Updates the URL with the search parameter (removes if empty)
   *  Maintains all other existing query parameters
   *
   * @param $event - The input event from the search field
   *
   */
  onInputSearch($event: Event) {
    this.inputSearch = ($event.target as HTMLSelectElement).value;
    this.router.navigate([], {
      queryParams: { search: this.inputSearch || null },
      queryParamsHandling: 'merge',
    });
  }

  resetFilters(): void {
    this.selectedCategory = '';
    this.inputSearch = '';
  }

  /**
   * Closes the Bootstrap offcanvas menu and cleans up the backdrop.
   * Handles both the offcanvas instance and any leftover DOM elements.
   *
   */
  closeOffCanvas() {
    // Get the offcanvas DOM element
    const offcanvasElement = document.getElementById('offcanvas');
    if (offcanvasElement) {
      // Get the offcanvas DOM element
      const offcanvasInstance =
        bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) {
        // Hide the offcanvas using Bootstrap's method
        offcanvasInstance.hide();
      }
    }

    // Manually remove any remaining backdrop element
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }
}
