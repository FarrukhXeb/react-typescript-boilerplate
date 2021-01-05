import { lazy } from 'react';
import { IRoute } from './types';

const routes: IRoute[] = [
    {
        name: 'Home',
        path: '/',
        component: lazy(() => import('./Home')),
        exact: true,
    },
    {
        name: 'About',
        path: '/about',
        component: lazy(() => import('./About')),
    },
    {
        name: 'Login',
        path: '/login',
        component: lazy(() => import('./Login')),
    },
    {
        name: 'Register',
        path: '/register',
        component: lazy(() => import('./Register')),
    },
];
export default routes;
