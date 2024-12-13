import React, { useState } from "react";

// Example of PropertyList component
const PropertyList = () => {
  const [properties, setProperties] = useState([
    { id: 1, title: "Property 1", price: "$100,000", location: "Location 1" },
    { id: 2, title: "Property 2", price: "$200,000", location: "Location 2" },
  ]);

  const handleDelete = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold">Manage Property Listings</h4>
      <button className="px-4 py-2 mb-4 text-white bg-blue-500">Add New Property</button>

      <table className="w-full border border-collapse border-gray-300 table-auto">
        <thead>
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Location</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td className="p-2 border">{property.title}</td>
              <td className="p-2 border">{property.price}</td>
              <td className="p-2 border">{property.location}</td>
              <td className="p-2 border">
                <button className="px-4 py-1 mr-2 text-white bg-green-500">Edit</button>
                <button
                  onClick={() => handleDelete(property.id)}
                  className="px-4 py-1 text-white bg-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyList;
