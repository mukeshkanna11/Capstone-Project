import { useState } from "react";

const AgentList = () => {
  const [agents, setAgents] = useState([
    { id: 1, name: "John Doe", email: "john.doe@email.com", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane.smith@email.com", phone: "987-654-3210" },
  ]);

  const handleDelete = (id) => {
    setAgents(agents.filter((agent) => agent.id !== id));
  };

  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold">Manage Agent Profiles</h4>
      <button className="px-4 py-2 mb-4 text-white bg-blue-500">Add New Agent</button>

      <table className="w-full border border-collapse border-gray-300 table-auto">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id}>
              <td className="p-2 border">{agent.name}</td>
              <td className="p-2 border">{agent.email}</td>
              <td className="p-2 border">{agent.phone}</td>
              <td className="p-2 border">
                <button className="px-4 py-1 mr-2 text-white bg-green-500">Edit</button>
                <button
                  onClick={() => handleDelete(agent.id)}
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

export default AgentList;
