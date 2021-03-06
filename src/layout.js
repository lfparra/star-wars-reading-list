import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Characters from './views/characters';
import Planets from './views/planets';
import CharacterPage from './views/characterPage';
import PlanetPage from './views/planetPage';
import NotFound from './views/notFound';
import Header from './components/header';
import inyectContext from './store/layoutContext';

const Layout = (props) => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters" component={Characters}/>
                    <Route exact path="/planets" component={Planets}/>
                    <Route exact path="/characterPage/:name" component={CharacterPage} />
                    <Route exact path="/planetPage/:name" component={PlanetPage} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    )

}

export default inyectContext(Layout);