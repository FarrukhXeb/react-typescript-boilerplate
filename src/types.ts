import { FC, LazyExoticComponent, ReactElement } from 'react';

export interface IRoute {
    name: string;
    path: string;
    component: LazyExoticComponent<() => ReactElement>;
    exact?: boolean;
    layout: FC;
}
