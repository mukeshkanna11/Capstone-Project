import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../data/properties';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="py-16 text-xl text-center text-red-500">
        Property not found!
      </div>
    );
  }

  console.log('Image Path:', property.image); // Debugging

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold text-[#0a3d62] mb-6">{property.title}</h1>
      <div className="flex flex-col md:flex-row">
        <img
          src={property.image}
          alt={property.title}
          onError={(e) => (e.target.src = './images/property.png')} // Fallback image
          className="object-cover w-full h-48 md:w-1/2"
        />
        <div className="md:w-1/2">
          <p className="text-xl text-gray-600">{property.description}</p>
          <p className="text-lg font-semibold text-[#0a3d62] mt-4">{`Price: ${property.price}`}</p>
          <p className="mt-2 text-gray-600">
            <strong>Location:</strong> {property.location}
          </p>
          <button
            className="mt-6 bg-[#27ae60] text-white py-2 px-4 rounded-full hover:bg-[#1a854d] transition-all"
            onClick={() => alert('Booking successfully!')}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
