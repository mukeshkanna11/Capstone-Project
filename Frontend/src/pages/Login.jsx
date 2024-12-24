import React, { useState } from 'react';
import axios from 'axios';
import { FaBuilding, FaHome, FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and Password are required.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('https://capstone-project-o9dz.onrender.com/api/users/login', {
        email,
        password,
      });

      if (response.status === 200) {
        sessionStorage.setItem('authToken', response.data.token);
        onLogin();
        alert('Login successful!');
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid credentials. Please check your email or password.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>

      {/* Animated Icons */}
      <div className="absolute text-blue-300 transition-transform transform top-8 left-8 animate-pulse hover:scale-110">
        <FaBuilding size={50} className="drop-shadow-md" />
      </div>
      <div className="absolute text-blue-300 transition-transform transform top-16 right-12 animate-pulse hover:rotate-12">
        <FaHome size={40} className="drop-shadow-md" />
      </div>
      <div className="absolute text-blue-300 transition-transform transform bottom-16 left-16 animate-spin-fast hover:scale-110">
        <FaKey size={50} className="drop-shadow-md" />
      </div>

      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg bg-opacity-90 backdrop-blur-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
          Welcome to RealEstatePro🏡
        </h2>
        <p className="mb-6 text-center text-gray-700">Log in to explore your dream properties.</p>

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold text-white rounded-lg transition duration-200 ${
              loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
