import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi'; // Real estate icon

const Navbar = () => {
  return (
    <nav className="bg-[#0a3d62] text-[#f1e1c6] shadow-lg sticky top-0 z-50 font-poppins">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <HiOutlineHome size={30} className="text-[#f1e1c6]" />
          <Link to="/" className="text-2xl font-bold text-[#f1e1c6]">
            RealEstatePro
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden space-x-6 md:flex">
          <Link
            to="/admin-dashboard" // Update this to point to Admin Dashboard
            className="text-[#f1e1c6] hover:underline hover:text-[#d3d3d3] transition duration-200"
          >
            Dashboard
          </Link>

          <Link
            to="/properties"
            className="text-[#f1e1c6] hover:underline hover:text-[#d3d3d3] transition duration-200"
          >
            Properties
          </Link>
          <Link
            to="/agents"
            className="text-[#f1e1c6] hover:underline hover:text-[#d3d3d3] transition duration-200"
          >
            Agents
          </Link>
          <Link
            to="/about"
            className="text-[#f1e1c6] hover:underline hover:text-[#d3d3d3] transition duration-200"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-[#f1e1c6] hover:underline hover:text-[#d3d3d3] transition duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Login Button */}
        <div>
          <Link
            to="/login"
            className="bg-[#006400] text-[#f1e1c6] px-6 py-2 rounded-full hover:bg-[#004d00] hover:text-[#f1e1c6] transition duration-200 text-lg font-semibold"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-[#0a3d62] px-4 py-3">
        <div className="flex flex-col space-y-2">
          <Link
            to="/admin-dashboard" // Update for Admin Dashboard
            className="text-[#f1e1c6] hover:underline hover:text-[#d3d3d3] transition duration-200"
          >
            Dashboard
          </Link>

          <Link
            to="/properties"
            className="text-[#f1e1c6] hover:underline hover:text-[#d3d3d3] transition duration-200"
          >
            Properties
          </Link>
          <Link
            to="/agents"
            className="text-[#f1e1c6] hover:underline hover:text-[#d3d3d3] transition duration-200"
          >
            Agents
          </Link>
          <Link
            to="/about"
            className="text-[#f1e1c6] hover:underline hover:text-[#d3d3d3] transition duration-200"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-[#f1e1c6] hover:underline hover:text-[#d3d3d3] transition duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
