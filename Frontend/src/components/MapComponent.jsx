import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const MapComponent = ({ properties }) => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: '<YOUR_GOOGLE_MAPS_API_KEY>' });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '400px' }}
      center={{ lat: properties[0].latitude, lng: properties[0].longitude }}
      zoom={12}
    >
      {properties.map((property) => (
        <Marker key={property._id} position={{ lat: property.latitude, lng: property.longitude }} />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
