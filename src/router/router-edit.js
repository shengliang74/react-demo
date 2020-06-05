import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Edit from '$pagesMobile/Edit/Edit';


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/edit">edit</Link></li>
                <li><Link to="/page1">Page1</Link></li>
            </ul>
            <Switch>
                <Route path="/edit" component={Edit}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;