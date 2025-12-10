// src/app/services/movies.ts
import { Injectable, signal, WritableSignal } from '@angular/core';

export interface Movie {
  title: string;
  rating: WritableSignal<number>; // The rating is now a WritableSignal
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getMovies() {
    return signal<Movie[]>([
      { title: 'Inception', rating: signal(5) },
      { title: 'The Shawshank Redemption', rating: signal(4) },
      { title: 'The Godfather', rating: signal(5) },
      { title: 'Pulp Fiction', rating: signal(3) },
    ]);
  }
}