import React, { ReactElement, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import MainLayout from './Shared/Layouts/MainLayout';

function App(): ReactElement {
    return (
        <div>
            <section>
                <Suspense fallback={<div>loading....</div>}>
                    <Switch>
                        {routes.map((r) => {
                            const { path, component: Component, exact } = r;
                            return (
                                <Route key={path} exact={exact} path={path}>
                                    <MainLayout>
                                        <Component />
                                    </MainLayout>
                                </Route>
                            );
                        })}
                    </Switch>
                </Suspense>
            </section>
        </div>
    );
}

export default App;
