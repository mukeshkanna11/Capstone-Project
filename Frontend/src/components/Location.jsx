import React from 'react';
import MapComponent from '../components/MapComponent';

const Location = () => {
  const locations = [
    { lat: 40.712776, lng: -74.005974 }, // Example marker for NYC
    { lat: 34.052235, lng: -118.243683 }, // Example marker for Los Angeles
  ];

  return (
    <div className="container mx-auto my-8">
      <h1 className="mb-6 text-3xl font-bold text-center">Our Locations</h1>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <MapComponent center={locations[0]} markers={locations} />
      </div>
    </div>
  );
};

export default Location;
