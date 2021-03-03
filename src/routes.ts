import { lazy } from 'react';
import { MainLayout, EmptyLayout } from './Shared/Layouts';

const routes: IRoute[] = [
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import('./Home')),
    exact: true,
    layout: MainLayout,
  },
  {
    name: 'About',
    path: '/about',
    component: lazy(() => import('./About')),
    layout: MainLayout,
  },
  {
    name: 'Login',
    path: '/login',
    component: lazy(() => import('./Login')),
    layout: EmptyLayout,
  },
  {
    name: 'Register',
    path: '/register',
    component: lazy(() => import('./Register')),
    layout: EmptyLayout,
  },
];
export default routes;
