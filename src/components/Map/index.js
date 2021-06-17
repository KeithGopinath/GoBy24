/* eslint-disable react/prop-types */
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '50vh',
  height: '500px',
};

const GoogleMap = ({ google }) => (
  <Map
    google={google}
    zoom={8}
    style={mapStyles}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    // initialCenter={{ lat, lng }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </Map>
);

export default GoogleApiWrapper({ apiKey: 'AIzaSyDrlTNLWBYNE_K_NYHcE4hTzjfbm-2QHu8' })(GoogleMap);
