import React from 'react';
import { useNavigate } from 'react-router-dom';
import properties from '../data/properties';

const Properties = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-8 mx-auto">
      <h1 className="text-3xl font-bold text-[#0a3d62] mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="flex flex-col overflow-hidden transition-all border rounded-lg shadow-lg hover:shadow-xl"
          >
            <img
              src={property.image}
              alt={property.title}
              className="object-cover w-full h-48"
            />
            <div className="flex flex-col justify-between flex-grow p-4">
              <h2 className="text-xl font-semibold text-[#0a3d62]">{property.title}</h2>
              <p className="text-lg text-[#27ae60] mt-2">{property.price}</p>
              <p className="text-md text-[#555] mt-2">{property.location}</p>
              <p className="text-sm text-[#777] mt-2">{property.description}</p>
              
              <button
                className="mt-4 bg-[#0a3d62] text-white py-2 px-4 rounded-full hover:bg-[#1a4d6c] transition-all"
                onClick={() => navigate(`/property/${property.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
