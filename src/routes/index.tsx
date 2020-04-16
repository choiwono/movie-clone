import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '@/pages/Home'
import Movies from '@/pages/Movies'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/movies/:category" component={Movies} />
                <Route path="/movies" component={Movies} />
                <Route path="/" exact component={HomePage} />
                {/*<Route component={} />*/}
            </Switch>
        </Router>
    )
};

export default Routes;