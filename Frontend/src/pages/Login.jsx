import React, { useState } from 'react';
import axios from 'axios';
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
      // Sending login request
      const response = await axios.post('https://capstone-project-o9dz.onrender.com/api/users/login', {
        email,
        password,
      });

      // If login successful, save token and user info to sessionStorage
      if (response.status === 200) {
        const userData = response.data; // Assuming response contains user data and token
        sessionStorage.setItem('authToken', userData.token);
        onLogin(userData); // Pass user data to the parent component
        alert('Login successful!');

        // Redirect based on user role
        if (userData.role === 'admin') {
          navigate('/admin-dashboard'); // Redirect to admin dashboard
        } else {
          navigate('/home'); // Redirect to home for regular users
        }
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
    <div className="flex items-center justify-center min-h-screen ">
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
