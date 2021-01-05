import React, { Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const About = React.lazy(() => import('./About'));
const Home = React.lazy(() => import('./Home'));

function App(): JSX.Element {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </header>
            <section>
                <Suspense fallback={<div>loading....</div>}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                    </Switch>
                </Suspense>
            </section>
        </div>
    );
}

export default App;
