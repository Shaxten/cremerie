import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'produits',
    loadComponent: () => import('./pages/products/products').then(m => m.Products)
  },
  {
    path: 'produits/:id',
    loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetail)
  },

  {
    path: 'a-propos',
    loadComponent: () => import('./pages/about/about').then(m => m.About)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
