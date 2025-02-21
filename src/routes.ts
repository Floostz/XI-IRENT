import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import Login from './users/Login';

export const routes: RouteDefinition[] = [
  {
    path: '/landing',
    component: lazy(() => import('./users/landingpage')),
  },
  {
    path: '/new-password',
    component: lazy(() => import('./users/Password')),
  },
  {
    path: '/reset',
    component: lazy(() => import('./users/Forget')),
  },
  {
    path: '/otp',
    component: lazy(() => import('./users/OTP')),
  },
  {
    path: '/',
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
    component: lazy(() => import('./users/component/product/Television')),
  },

  {
    path: '/warnet',
    component: lazy(() => import('./users/booking/bookingwarnet')),
  },
  {
    path: '/register',
    component: lazy(() => import('./users/Register')),
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
  {
    path: '/admin',
    component: lazy(() => import('./admin/homeadmin')),
  },
];
