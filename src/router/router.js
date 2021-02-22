import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '$pages/Home/index.tsx';
import Page1 from '$pages/Page1/index.tsx';


const getRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/page1" component={Page1}/>
        </Switch>
    </Router>
);

export default getRouter;