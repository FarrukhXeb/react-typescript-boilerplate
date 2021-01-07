import { lazy } from 'react';
import EmptyLayout from './Shared/Layouts/EmptyLayout';
import MainLayout from './Shared/Layouts/MainLayout';
import { IRoute } from './types';

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
