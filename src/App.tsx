import React, { FC, Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';

import FullScreenLoader from './Components/FullScreenLoader';
import routes from './routes';

const App: FC = () => {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Switch>
        {routes.map((r) => {
          const { path, component: Component, exact, layout: Layout } = r;
          return (
            <Route key={path} exact={exact} path={path}>
              <Layout>
                <Component />
              </Layout>
            </Route>
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default App;
