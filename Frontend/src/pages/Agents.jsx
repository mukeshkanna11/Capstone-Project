// src/pages/Agents.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import agents from '../data/agents'; // Import the mock data
import AgentCard from '../components/AgentCard';

const Agents = () => {
  return (
    <div className="container py-8 mx-auto">
      <h1 className="text-3xl font-bold text-[#0a3d62] mb-6 text-center">
        Our Agents
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default Agents;
