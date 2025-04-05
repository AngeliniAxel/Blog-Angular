import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
      title: new FormControl(),
      text: new FormControl(),
      author: new FormControl(),
      image: new FormControl(),
      category: new FormControl(),
    });
  }

  onSubmit() {
    this.postsService.createNewPost(this.form.value);
    this.router.navigate(['/home']);
  }
}
