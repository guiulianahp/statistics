import React from 'react';
import {
    Match,
    Miss,
    Link
} from 'react-router';

import Home from './Home.jsx';
import About from './About.jsx';
import Error404 from './Error404.jsx';

function Main() {
    return(
        <main role="application">
            <Match
            pattern="/"
            exactly
            component={Home}/>
            <Miss
            component={Error404}/>
        </main>
    )
}

export default Main;