import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import CharacterPage from './views/characterPage';
import PlanetPage from './views/planetPage';

const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characterPage/:name" component={CharacterPage} />
                    <Route exact path="/planetPage/:name" component={PlanetPage} />
                </Switch>
            </BrowserRouter>
        </>
    )

}

export default Layout;