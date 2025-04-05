import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(),
      text: new FormControl(),
      author: new FormControl(),
      image: new FormControl(),
      category: new FormControl(),
    });
  }

  onSubmit() {
    const { title, text, author, image, category } = this.form.value;
    console.log({ ...this.form.value, date: new Date() });
  }
}
