import { Routes, Router } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadComponent: () => import('./features/feed/pages/home/home.component').then(m => m.HomeComponent),
  },
];
