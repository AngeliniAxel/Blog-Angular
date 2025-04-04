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
    this.selectedCategory = '';
    this.inputSearch = '';
    this.categories = this.categoriesService.getAll();

    this.router.navigate([], {
      queryParams: { category: null, search: null },
      queryParamsHandling: 'merge',
    });
  }

  get isHomeRoute(): boolean {
    return this.router.url.includes('/home');
  }

  onchangeCategory($event: Event) {
    this.selectedCategory = ($event.target as HTMLSelectElement).value;
    this.router.navigate([], {
      queryParams: { category: this.selectedCategory || null },
      queryParamsHandling: 'merge',
    });

    const offcanvasElement = document.getElementById('offcanvas');
    if (offcanvasElement) {
      const offcanvasInstance =
        bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }

    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }

  onInputSearch($event: Event) {
    this.inputSearch = ($event.target as HTMLSelectElement).value;
    this.router.navigate([], {
      queryParams: { search: this.inputSearch || null },
      queryParamsHandling: 'merge',
    });
  }

  onChangeCloseOffcanvas() {
    const offcanvasElement = document.getElementById('offcanvas');
    if (offcanvasElement) {
      const offcanvasInstance =
        bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }

    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }
}
