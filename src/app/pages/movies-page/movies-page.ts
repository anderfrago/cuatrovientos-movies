import { Component, inject } from '@angular/core';
import { MovieCardComponent } from '../../components/organisms/movie-card/movie-card';
import { MoviesService } from '../../services/movies';


@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [MovieCardComponent],
  template: `
    <h2>Recordatorio de Películas</h2>
    <div>
      @for (movie of movies(); track movie.title) {
        <app-movie-card [movie]="movie" />
      }
    </div>
  `
})
export class MoviesPageComponent {
  private moviesService = inject(MoviesService);
  movies = this.moviesService.getMovies();
}