import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingIcon } from './rating-icon';

describe('RatingIcon', () => {
  let component: RatingIcon;
  let fixture: ComponentFixture<RatingIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
