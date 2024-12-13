import React from 'react';
import { Link } from 'react-router-dom';
import properties from '../data/properties';  // Import static properties data

const PropertyCard = ({ property }) => {
  return (
    <div className="flex flex-col overflow-hidden transition-all duration-300 border rounded-lg shadow-lg hover:shadow-xl">
      <img
        src={property.image}
        alt={property.title}
        className="object-cover w-full h-48"
      />
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h2 className="text-2xl font-semibold text-[#0a3d62]">{property.title}</h2>
          <p className="text-xl text-[#27ae60] mt-2">{property.price}</p>
          <p className="text-md text-[#555] mt-2">{property.location}</p>
        </div>
        <Link
          to={`/properties/${property.id}`}
          className="mt-4 bg-[#0a3d62] text-white py-2 px-4 rounded-full hover:bg-[#1a4d6c] transition-all text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
