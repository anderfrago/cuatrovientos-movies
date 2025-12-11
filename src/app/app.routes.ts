import { Routes } from '@angular/router';
import { UserForm } from './user-form/user-form';
import { MoviesPageComponent } from './pages/movies-page/movies-page';

export const routes: Routes = [
    {
        path: '',
        component: MoviesPageComponent
    },
    {
        path: 'user-form',
        component: UserForm
    }
];
