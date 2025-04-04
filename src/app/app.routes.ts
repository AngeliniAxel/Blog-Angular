import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';

export const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'post/:idPost', component: ViewPostComponent },
  { path: '**', redirectTo: '/home' },
];
