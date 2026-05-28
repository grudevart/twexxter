import { Routes, Router } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadComponent: () => import('./features/feed/pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/pages/profile.component').then(m => m.ProfileComponent),
  },
];
