import React from 'react';
import { renderRoutes } from 'react-router-config'
import { NavLink as Link } from 'react-router-dom'

export default ({route}) => (
    <div>
        <Link to='/async-one'>To Async One</Link>
        <Link to='/async-two'>To Async Two</Link>

        <div>
            {renderRoutes(route.childRoutes)}
        </div>
    </div>
);
