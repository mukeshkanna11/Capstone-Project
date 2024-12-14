import React from 'react';
import { useParams } from 'react-router-dom';
import agents from '../data/agents'; // Import the mock data

const AgentProfile = () => {
  const { id } = useParams(); // Get the agent ID from the URL
  const agent = agents.find((agent) => agent.id === parseInt(id));

  if (!agent) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-red-600">Agent not found</h1>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg sm:p-10">
        {/* Header Section */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-6">

          {/* Agent Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-[#0a3d62]">{agent.name}</h2>
            <p className="mt-2 text-gray-600">{agent.bio}</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
          <div>
            <p className="text-gray-700">
              <strong>Email:</strong> {agent.contact}
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Phone:</strong> {agent.phone}
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <strong>Experience:</strong> {agent.experience} years
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Languages:</strong> {agent.languages.join(', ')}
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <strong>Specialties:</strong> {agent.specialties.join(', ')}
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <strong>Location:</strong> {agent.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
