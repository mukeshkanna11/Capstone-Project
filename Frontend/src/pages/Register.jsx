import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage('');

    // Validate inputs
    if (!username || !email || !password) {
      alert('All fields are required.');
      return;
    }

    try {
      console.log('Sending registration data:', { username, email, password });

      const response = await axios.post('http://localhost:5000/api/users/register', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        console.log('Registration successful:', response.data);
        alert('Registration successful! Please log in.');
        navigate('/login');
      } else {
        console.log('Unexpected response:', response);
        setErrorMessage('Unexpected error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Full error object:', error);
      if (error.response) {
        console.error('Error response:', error.response);
        setErrorMessage(error.response.data.message || 'Registration failed. Please try again.');
      } else if (error.request) {
        console.error('Error request:', error.request);
        setErrorMessage('No response from server. Please check if the backend is running.');
      } else {
        console.error('Error:', error.message);
        setErrorMessage('An error occurred while registering. Please try again later.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>
        {errorMessage && (
          <div className="mb-4 text-sm text-red-500">{errorMessage}</div>
        )}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => navigate('/login')}
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
