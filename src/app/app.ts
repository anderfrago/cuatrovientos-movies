import { Component } from '@angular/core';
import { MoviesPageComponent } from './pages/movies-page/movies-page';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoviesPageComponent],
  template: `
    <main>
      <app-movies-page />
    </main>
  `,
  styles: `main { padding: 20px; }`
})
export class App {}