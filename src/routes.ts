import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import AboutData from './pages/about.data';
import Login from './users/Login';

export const routes: RouteDefinition[] = [
  {
    path: '/w',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
  
  {
    path: '/landing',
    component: lazy(() => import('./users/landingpage')),
  },
  {
    path: '/price',
    component: lazy(() => import('./users/Pricelist')),
  },
  {
   path: '/product',
   component: lazy(() => import('./users/product') )
  },
  {
    path: '/produk',
    component: lazy(() => import('./porduct') )
   },
];
