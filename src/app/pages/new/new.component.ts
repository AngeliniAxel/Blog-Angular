import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Notyf } from 'notyf';
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
  notyf: Notyf;

  ngOnInit() {
    this.categories = this.categoriesService.getAll();
  }

  form: FormGroup;

  constructor() {
    this.notyf = new Notyf();

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
      image: new FormControl(null, [Validators.required, this.urlValidator]),
      category: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    // fetch the selected category object from the service using the title from the form
    const category = this.categoriesService.getByTitle(
      this.form.value.category
    );

    const newPost = this.postsService.createNewPost({
      ...this.form.value,
      category,
    });

    // Notify the user about the creation status
    if (newPost)
      this.notyf.success({
        message: 'Post created successfully!',
        background: '#9b59b6',
      });
    else this.notyf.error('There was an error creating the post!');

    this.router.navigate(['/home']);
  }

  checkError(field: string, validator: string): boolean | undefined {
    return (
      this.form.get(field)?.hasError(validator) && this.form.get(field)?.touched
    );
  }

  urlValidator(control: AbstractControl) {
    const urlPattern =
      /^(https?:\/\/)?([\w-]+\.)+[\w-]+(:\d{1,5})?(\/\S*)?(\?\S*)?(#\S*)?$/i;
    if (control.value && !urlPattern.test(control.value)) {
      return { invalidUrl: true };
    }
    return null;
  }
}
