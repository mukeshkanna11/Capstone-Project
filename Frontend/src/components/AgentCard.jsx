import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AgentCard = ({ agent }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
      {/* Conditionally Render Image */}
      {showImage && (
        <div className="relative w-full h-48">
          <img
            src={agent.image}
            alt={agent.name}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#0a3d62]">{agent.name}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{agent.bio}</p>
        <Link
          to={`/agent/${agent.id}`}
          onClick={() => setShowImage(true)} // Show image on button click
          className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default AgentCard;
