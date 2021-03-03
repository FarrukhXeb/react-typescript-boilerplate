import { FC, LazyExoticComponent } from 'react';

declare global {
  interface IRoute {
    name: string;
    path: string;
    component: LazyExoticComponent<FC>;
    exact?: boolean;
    layout: FC;
  }
}
