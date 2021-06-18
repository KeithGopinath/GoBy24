/* eslint-disable react/prop-types */
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const GoogleMap = ({ google }) => (
  <Map
    google={google}
    zoom={7}
    style={mapStyles}
    // defaultCenter={{ lat: 20.5937, lng: 150.644 }}
    initialCenter={{ lat: 40.854885, lng: -88.081807 }}
  >
    <Marker position={{ lat: 40.854885, lng: -88.081807 }} />
  </Map>
);

export default GoogleApiWrapper({ apiKey: 'AIzaSyDrlTNLWBYNE_K_NYHcE4hTzjfbm-2QHu8' })(GoogleMap);
