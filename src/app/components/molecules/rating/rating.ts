// src/app/components/molecules/rating/rating.ts
import { Component, model } from '@angular/core';
import { RatingIconComponent } from '../../atoms/rating-icon/rating-icon';


@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [RatingIconComponent],
  template: `
    <div>
      @for (item of ratingOptions; track item) {
        <app-rating-icon
          [isFilled]="$index < rating()"
          (iconClick)="setRating($index + 1)" />
      }
    </div>
  `
})
export class RatingComponent {
  // model() creates a special signal for two-way binding: [(rating)]
  rating = model(0);
  readonly ratingOptions = [1, 2, 3, 4, 5];

  setRating(newRating: number): void {
    const currentRating = this.rating();
    // If the same rating is clicked again, reset to 0
    this.rating.set(currentRating === newRating ? 0 : newRating);
  }
}