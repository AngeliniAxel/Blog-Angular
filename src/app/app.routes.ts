import { Routes } from '@angular/router';
import { BlogComponentComponent } from './pages/blog-component/blog-component.component';
import { NewComponent } from './pages/new/new.component';

export const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: BlogComponentComponent },
  { path: 'new', component: NewComponent },
  { path: '**', redirectTo: '/home' },
];
