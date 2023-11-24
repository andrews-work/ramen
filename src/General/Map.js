import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'google-maps-react';

const Map = withGoogleMap(({ apiKey }) => (
  <GoogleMap
    defaultCenter={{ lat: -33.83162307739258, lng: 151.22364807128906 }}
    defaultZoom={14}
  >
    <Marker
      position={{ lat: -33.83162307739258, lng: 151.22364807128906 }}
      title="My location"
    />
  </GoogleMap>
));

export default Map;
