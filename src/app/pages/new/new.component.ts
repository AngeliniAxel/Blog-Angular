import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ICategory } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  categories: ICategory[] = [];
  categoriesService = inject(CategoryService);

  ngOnInit() {
    this.categories = this.categoriesService.getAll();
  }
}
