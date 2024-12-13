// src/pages/AgentProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import agents from '../data/agents'; // Import the mock data

const AgentProfile = () => {
  const { id } = useParams(); // Get the agent ID from the URL
  const agent = agents.find((agent) => agent.id === parseInt(id));

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <div className="container py-8 mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={agent.image}
          alt={agent.name}
          className="object-cover w-48 h-48 mb-4 rounded-full"
        />
        <h2 className="text-3xl font-bold text-[#0a3d62]">{agent.name}</h2>
        <p className="mt-4 text-center text-gray-600">{agent.bio}</p>
        <p className="mt-2 text-gray-600"><strong>Contact:</strong> {agent.contact}</p>
        <p className="mt-2 text-gray-600"><strong>Phone:</strong> {agent.phone}</p>
      </div>
    </div>
  );
};

export default AgentProfile;
