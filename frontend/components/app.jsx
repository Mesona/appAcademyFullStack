import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import PlacesIndexContainer from './places/places_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import FooterContainer from './footer/footer_container';
import PlaceShowContainer from './places/place_show_container';

const App = () => (
  <div>
    <Modal />
    <Route path="/" component={ NavBarContainer } />
    <Switch>
      <Route exact path="/" component={ PlacesIndexContainer } />
      <Route path="/places/:placeId" component={ PlaceShowContainer } />
      <Redirect from="*" to="/" />
    </Switch>
    <Route path="/" component={ FooterContainer } />

  </div>
);

export default App;