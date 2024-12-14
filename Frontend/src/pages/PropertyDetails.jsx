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

  return (
    <div className="container max-w-4xl px-4 py-8 mx-auto">
      <div className="overflow-hidden bg-white rounded-md shadow-md">
        {/* Property Title and Description */}
        <div className="p-4 border-b">
          <h1 className="text-2xl font-semibold text-[#0a3d62] mb-2">
            {property.title}
          </h1>
          <p className="text-sm text-gray-600">{property.description}</p>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-2 gap-4 p-4 text-sm md:text-base">
          <p>
            <strong className="font-semibold">Price:</strong> {property.price}
          </p>
          <p>
            <strong className="font-semibold">Location:</strong> {property.location}
          </p>
          <p>
            <strong className="font-semibold">Bedrooms:</strong> {property.bedrooms || '2/3'}
          </p>
          <p>
            <strong className="font-semibold">Bathrooms:</strong> {property.bathrooms || '3/4'}
          </p>
          <p>
            <strong className="font-semibold">Type:</strong> {property.type || 'N/A'}
          </p>
          <p>
            <strong className="font-semibold">Size:</strong> {property.size || 'N/A'} sq. ft.
          </p>
        </div>

        {/* Call to Action */}
        <div className="p-4 text-center">
          <button
            className="bg-[#27ae60] text-white text-sm py-2 px-4 rounded hover:bg-[#1a854d] transition-all"
            onClick={() => alert('Booking successfully! and Agent will connect with you soon!')}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
