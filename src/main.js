import React from 'react';
import {render} from 'react-dom';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'

import routes from './routes'

const App = () => (
    <div id="app">
        I'm React
        <Router>
            {renderRoutes(routes)}
        </Router>
    </div>
);

render(<App />, document.getElementById('root'));
