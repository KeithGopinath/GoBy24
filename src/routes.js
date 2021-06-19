import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import OfferRide from './containers/OfferRide';
import Passengers from './containers/Passengers';
import DateTime from './containers/DateTime';
import BoostPage from './containers/BoostPage';
import DropOff from './containers/DropOff';
import Seats from './containers/Seats';
import Price from './containers/Price';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route exact path="/offerride" component={OfferRide} />
        <Route exact path="/passengers" component={Passengers} />
        <Route exact path="/datetime" component={DateTime} />
        <Route exact path="/boostpage" component={BoostPage} />
        <Route exact path="/dropoff" component={DropOff} />
        <Route exact path="/seats" component={Seats} />
        \<Route exact path="/price" component={Price} />
      </Switch>
    </React.Fragment>
  </Router >
);

export default Routes;

