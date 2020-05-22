import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '@/pages/Home'
import Movies from '@/pages/Movies'
import MovieDetail from '@/pages/MovieDetail'
import { useMediaQuery } from 'react-responsive';
import { device } from '@/Shared/style/shared';
import HeaderMobile from '@/components/Layout/Header/HeaderMobile'
import LapTopHeader from '@/components/Layout/Header/LapTopHeader'

const Routes = () => {
    
    const isTableOrLabtopHeader = useMediaQuery({
        query : `(min-device-width : ${device.Tablet})`
    })

    return (
        <Router>
            { isTableOrLabtopHeader ? 
                <LapTopHeader /> 
              : <HeaderMobile/> }
            
            <Switch>
                <Route path="/movies/detail/:id" component={MovieDetail} />
                <Route path="/movies/:category" component={Movies} />
                <Route path="/movies" component={Movies} />
                <Route path="/about" component={Movies} />
                <Route path="/" exact component={HomePage} />
                {/*<Route component={} />*/}
            </Switch>
        </Router>
    )
};

export default Routes;