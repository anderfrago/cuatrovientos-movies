// src/app/components/atoms/rating-icon/rating-icon.ts
import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-rating-icon',
  standalone: true,
  template: `
    <span 
      class="octicon"
      [class.octicon-thumbsup]="isFilled()"
      [class.octicon-thumbsdown]="!isFilled()"
      (click)="iconClick.emit()">
    </span>
  `,
  styles: `
    .octicon { cursor: pointer; font-size: 24px; }
    .octicon-thumbsup { color: orange; }
  `
})
export class RatingIconComponent {
  // @Input() isFilled = false;
  isFilled = input(false);

  iconClick = output<void>();
  /*
  @Output() iconClick = new EventEmitter<void>();

  onClick(): void {
    this.iconClick.emit();
  }
  */
}
