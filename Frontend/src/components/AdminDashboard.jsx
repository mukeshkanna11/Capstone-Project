import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaHome, FaUsers, FaChartLine, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';  // Add icons

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar for navigation */}
      <div className="w-64 p-6 text-white shadow-lg bg-gradient-to-b from-gray-800 to-gray-900">
        <h2 className="mb-6 text-2xl font-bold text-center">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link to="property-list" className="flex items-center p-3 transition-all rounded-md hover:bg-blue-600">
              <FaHome className="mr-3 text-xl" />
              Property Listings
            </Link>
          </li>
          <li>
            <Link to="agent-list" className="flex items-center p-3 transition-all rounded-md hover:bg-blue-600">
              <FaUsers className="mr-3 text-xl" />
              Agent Profiles
            </Link>
          </li>
          <li>
            <Link to="user-activity" className="flex items-center p-3 transition-all rounded-md hover:bg-blue-600">
              <FaClipboardList className="mr-3 text-xl" />
              User Activity
            </Link>
          </li>
          <li>
            <Link to="reports" className="flex items-center p-3 transition-all rounded-md hover:bg-blue-600">
              <FaChartLine className="mr-3 text-xl" />
              Reports & Analytics
            </Link>
          </li>
          <li>
            <Link to="/logout" className="flex items-center p-3 transition-all rounded-md hover:bg-red-600">
              <FaSignOutAlt className="mr-3 text-xl" />
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-8 bg-gray-100">
        <h3 className="mb-6 text-3xl font-semibold text-gray-800">Welcome to the Admin Dashboard</h3>

        {/* Quick Overview Stats Section */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h4 className="mb-2 text-xl font-semibold">Total Properties</h4>
            <p className="text-3xl font-bold text-blue-600">20</p>
            <p className="text-gray-600">Properties listed in the system</p>
          </div>
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h4 className="mb-2 text-xl font-semibold">Active Agents</h4>
            <p className="text-3xl font-bold text-green-600">10</p>
            <p className="text-gray-600">Agents currently active on the platform</p>
          </div>
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h4 className="mb-2 text-xl font-semibold">User Activity</h4>
            <p className="text-3xl font-bold text-orange-600">86</p>
            <p className="text-gray-600">Recent activities in the last week</p>
          </div>
        </div>

        {/* Detailed Overview or Content Section */}
        <div>
          <h4 className="mb-4 text-2xl font-semibold text-gray-800">Latest Updates</h4>
          <p className="mb-4 text-gray-700">Here you can find a summary of the latest actions on the platform. Click on the sections in the sidebar for more details.</p>

          {/* Outlet for nested routes */}
          <Outlet /> {/* This is where the nested routes will be rendered */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
