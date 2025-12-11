import { Component, signal } from '@angular/core';

import { User } from './user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserForm {
  countries = signal(['United States', 'Singapore', 'Hong Kong', 'Australia'])

  model: User = {
    firstName: '',
    email: '',
    country: ''
  };
  submitted = signal(false);

  onSubmit() {
    this.submitted.set(true);
  }

}
