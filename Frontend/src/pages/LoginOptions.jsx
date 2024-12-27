import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importing for animations
import { FaUserShield, FaUserAlt } from 'react-icons/fa'; // Importing icons

const LoginOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-center"
      >
        <h1 className="mb-4 text-5xl font-extrabold text-blue-900">
          Welcome to RealEstate Pro
        </h1>
        <p className="text-lg text-gray-700">
          Discover your dream property with our trusted platform for buying, selling, and renting.
        </p>
      </motion.div>

      {/* Login Options Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-md p-8 bg-white shadow-xl rounded-3xl"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Choose Your Login Option
        </h2>
        <div className="flex flex-col space-y-6">
          {/* Admin Login */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login?role=admin')}
            className="flex items-center justify-center w-full px-6 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700"
          >
            <FaUserShield className="mr-3 text-xl" />
            Admin Login
          </motion.button>

          {/* User Login */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login?role=user')}
            className="flex items-center justify-center w-full px-6 py-4 text-lg font-semibold text-white bg-green-600 rounded-full shadow-md hover:bg-green-700"
          >
            <FaUserAlt className="mr-3 text-xl" />
            User Login
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-gray-600">
          &copy; 2023 RealEstate Pro. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default LoginOptions;
