import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Page Loader Fallback Component
import PageLoader from './common/components/page-loader/PageLoader';

// Routes - Lazy Loading
const Home = lazy(() => import('./modules/home/Home'));
const About = lazy(() => import('./modules/about/About'));
// const TicketDetails = lazy(() => import('./modules/ticket-details/views/TicketDetails'));
const NoMatchPage = lazy(() => import('./modules/not-found/NoMatchPage'));

const Routes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={`/home`} />} />
                <Route path="/home" render={props => <Home {...props} />} />
                <Route path="/about" render={props => <About {...props} />} />
                {/* <Route path="/tickets/:id" render={props => <TicketDetails {...props} />} /> */}
                <Route render={props => <NoMatchPage {...props} />} />
            </Switch>
        </Suspense>
    );
};

Routes.propTypes = {
    location: PropTypes.object, // React Router Passed Props
};

export default Routes;
