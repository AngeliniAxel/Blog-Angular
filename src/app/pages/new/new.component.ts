import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  categories: ICategory[] = [];
  categoriesService = inject(CategoryService);
  postsService = inject(PostService);
  router = inject(Router);

  ngOnInit() {
    this.categories = this.categoriesService.getAll();
  }

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(70),
      ]),
      text: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(1500),
      ]),
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      image: new FormControl(),
      category: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    // fetch the selected category object from the service using the title from the form
    const category = this.categoriesService.getByTitle(
      this.form.value.category
    );

    this.postsService.createNewPost({ ...this.form.value, category });
    this.router.navigate(['/home']);
  }

  checkError(field: string, validator: string): boolean | undefined {
    return (
      this.form.get(field)?.hasError(validator) && this.form.get(field)?.touched
    );
  }
}
