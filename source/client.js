import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';

import Dashboard from './dashboard/containers/Dashboard.jsx';

render(
    <BrowserRouter>
        <Dashboard />
    </BrowserRouter>,
    document.getElementById('render-target')
)
