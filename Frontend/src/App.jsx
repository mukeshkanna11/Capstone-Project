import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginOptions from './pages/LoginOptions';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Agents from './pages/Agents';
import MapComponent from './components/MapComponent';
import Location from './components/Location';
import ContactForm from './components/ContactForm';
import AboutUs from './pages/AboutUs';
import AdminDashboard from './components/AdminDashboard';
import PropertyList from './components/PropertyList';
import AgentList from './components/AgentList';
import UserActivity from './components/UserActivity';
import Reports from './components/Reports';
import AgentProfile from './pages/AgentProfile';

// Authentication Context
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

// Protected Route Component
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login-options" replace />;
};

const App = () => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null, // Dynamic user information
  });

  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register', '/login-options'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  const handleLogin = (userData) => {
    setAuthState({ isAuthenticated: true, user: userData });
  };

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...authState, handleLogin, handleLogout }}>
      <div className="font-poppins bg-[#f9f9f9]">
        {shouldShowNavbar && <Navbar />}
        <div className="min-h-screen bg-[#f9f9f9] py-10">
          <div className="container px-4 mx-auto">
            <Routes>
              {/* Default Route */}
              <Route path="/" element={<Navigate to="/login-options" replace />} />

              {/* Public Routes */}
              <Route path="/login-options" element={<LoginOptions />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              <Route path="/home" element={<PrivateRoute element={<Home />} />} />
              <Route path="/properties" element={<PrivateRoute element={<Properties />} />} />
              <Route path="/property/:id" element={<PrivateRoute element={<PropertyDetails />} />} />
              <Route path="/agents" element={<PrivateRoute element={<Agents />} />} />
              <Route path="/map" element={<PrivateRoute element={<MapComponent />} />} />
              <Route path="/location" element={<PrivateRoute element={<Location />} />} />
              <Route path="/contact" element={<PrivateRoute element={<ContactForm />} />} />
              <Route path="/about" element={<PrivateRoute element={<AboutUs />} />} />
              <Route path="/agent/:id" element={<PrivateRoute element={<AgentProfile />} />} />

              {/* Admin Dashboard with Nested Routes */}
              <Route path="/admin-dashboard" element={<PrivateRoute element={<AdminDashboard />} />}>
                <Route path="property-list" element={<PrivateRoute element={<PropertyList />} />} />
                <Route path="agent-list" element={<PrivateRoute element={<AgentList />} />} />
                <Route path="user-activity" element={<PrivateRoute element={<UserActivity />} />} />
                <Route path="reports" element={<PrivateRoute element={<Reports />} />} />
              </Route>

              {/* Catch-All Redirect */}
              <Route path="*" element={<Navigate to="/login-options" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
