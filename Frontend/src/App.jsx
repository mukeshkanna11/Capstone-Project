import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PropertyDetails from './pages/PropertyDetails';
import Properties from './pages/Properties';
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
import Footer from './components/Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="font-poppins bg-[#f9f9f9]">
      {shouldShowNavbar && <Navbar onLogout={() => setIsAuthenticated(false)} />}

      <div className="min-h-screen bg-[#f9f9f9] py-10">
        <div className="container px-4 mx-auto">
          <Routes>
            <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/properties" element={<PrivateRoute element={<Properties />} />} />
            <Route path="/property/:id" element={<PrivateRoute element={<PropertyDetails />} />} />
            <Route path="/agents" element={<PrivateRoute element={<Agents />} />} />
            <Route path="/map" element={<PrivateRoute element={<MapComponent />} />} />
            <Route path="/location" element={<PrivateRoute element={<Location />} />} />
            <Route path="/contact" element={<PrivateRoute element={<ContactForm />} />} />
            <Route path="/about" element={<PrivateRoute element={<AboutUs />} />} />
            <Route path="/agent/:id" element={<PrivateRoute element={<AgentProfile />} />} />
            <Route path="/admin-dashboard" element={<PrivateRoute element={<AdminDashboard />} />}>
              <Route path="property-list" element={<PrivateRoute element={<PropertyList />} />} />
              <Route path="agent-list" element={<PrivateRoute element={<AgentList />} />} />
              <Route path="user-activity" element={<PrivateRoute element={<UserActivity />} />} />
              <Route path="reports" element={<PrivateRoute element={<Reports />} />} />
            </Route>
          </Routes>
        </div>
      </div>

      {shouldShowNavbar && <Footer />}
    </div>
  );
};

export default App;
