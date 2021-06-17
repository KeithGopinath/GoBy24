import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import OfferRide from './containers/OfferRide';
import HeaderBar from './components/HeaderBar';
import Passengers from './containers/Passengers';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      <HeaderBar />
      <Switch>
        <Route exact path="/offerride" component={OfferRide} />
        <Route exact path="/passengers" component={Passengers} />
      </Switch>
    </React.Fragment>
  </Router >
);

export default Routes;

