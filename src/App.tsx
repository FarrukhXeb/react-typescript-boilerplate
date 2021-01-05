import React, { ReactElement, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import routes from './routes';

function App(): ReactElement {
    return (
        <div>
            <header>
                <ul>
                    {routes.map((route) => {
                        const { path, name } = route;
                        return (
                            <li key={name}>
                                <Link to={path}>{name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </header>
            <section>
                <Suspense fallback={<div>loading....</div>}>
                    <Switch>
                        {routes.map((r) => {
                            const { path, component: Component, exact } = r;
                            return (
                                <Route key={path} exact={exact} path={path} component={Component} />
                            );
                        })}
                    </Switch>
                </Suspense>
            </section>
        </div>
    );
}

export default App;
