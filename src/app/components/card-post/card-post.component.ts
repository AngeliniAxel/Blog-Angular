import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-card-post',
  imports: [DatePipe, RouterLink],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css',
})
export class CardPostComponent {
  @Input() post: Post | undefined;
}
