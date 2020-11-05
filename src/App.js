import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';

function App() {
    const routes = useRoutes();
    return (
        <Router>
            <Fragment>
                {routes}
            </Fragment>
        </Router>
    );
}

export default App;
