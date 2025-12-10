// src/app/components/organisms/movie-card/movie-card.ts
import { Component, input } from '@angular/core';

import { RatingComponent } from '../../molecules/rating/rating';
import { Movie } from '../../../services/movies';


@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RatingComponent],
  template: `
    @if (movie()) {
      <div class="card">
        <h3>{{ movie().title }}</h3>
        <app-rating [(rating)]="movie().rating" />
      </div>
    }
  `,
  styles: `.card { border: 1px solid #ccc; padding: 16px; margin-bottom: 8px; border-radius: 8px; }`
})
export class MovieCardComponent {
  // input() creates a signal-based input property
  movie = input.required<Movie>();
}