import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import Login from './users/Login';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./users/landingpage')),
  },
  {
    path: '/w',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/price',
    component: lazy(() => import('./users/Pricelist')),
  },
  {
    path: '/product',
    component: lazy(() => import('./users/product')),
  },
  {
    path: '/product/:id', // Dynamic route for individual product pages
    component: lazy(() => import('./users/component/product/ProductDetail')),
  },
  {
    path: '/produk',
    component: lazy(() => import('./porduct')),
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
