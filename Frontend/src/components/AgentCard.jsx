// src/components/AgentCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AgentCard = ({ agent }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <img src={agent.image} alt={agent.name} className="object-cover w-full h-48 mb-4 rounded-lg" />
      <h3 className="text-xl font-semibold text-[#0a3d62]">{agent.name}</h3>
      <p className="mt-2 text-gray-600">{agent.bio}</p>
      <Link
        to={`/agent/${agent.id}`}
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        View Profile
      </Link>
    </div>
  );
};

export default AgentCard;
