// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a3d62] text-white py-8 mt-12">
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-3">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#f0f0f0]">About Us</h3>
          <p className="text-sm text-gray-300">
            Real Estate is your trusted partner in finding your dream property. Whether you are
            looking for a home or an investment, we offer the best listings with top-notch support.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#f0f0f0]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-[#27ae60]">About Us</Link></li>
            <li><Link to="/properties" className="hover:text-[#27ae60]">Properties</Link></li>
            <li><Link to="/agents" className="hover:text-[#27ae60]">Agents</Link></li>
            <li><Link to="/contact" className="hover:text-[#27ae60]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#f0f0f0]">Contact Us</h3>
          <p className="text-sm text-gray-300">
            123 Dream Street, Chennai, India<br />
            Phone: +91 98765 43210<br />
            Email: info@realestate.com
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-[#27ae60]">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-[#27ae60]">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-[#27ae60]">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-[#27ae60]">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-4 mt-8 text-center border-t border-gray-700">
        <p className="text-sm text-gray-400">&copy; 2024 Real Estate. All Rights Reserved.</p>
        <p className="text-sm text-gray-400">Designed by Dream Properties Team</p>
      </div>
    </footer>
  );
};

export default Footer;
