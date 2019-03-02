import React from 'react';
import { connect } from 'react-redux';

import PlacesShow from './place_show';
import { fetchPlace } from '../../actions/places_actions';


// console.log(state);
const mapStateToProps = (state, ownProps) => ({
  // place: state.places[ownProps.match.params.placeId],
});

const mapDispatchToProps = dispatch => ({
  fetchPlace: id => dispatch(fetchPlace(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesShow);