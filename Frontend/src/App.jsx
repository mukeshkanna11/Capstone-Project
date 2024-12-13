import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Ensure Navbar is in the components folder
import Home from './pages/Home';  // Home page
import Login from './pages/Login'; // Login page
import PropertyDetails from './pages/PropertyDetails';  // PropertyDetails page
import Properties from './pages/Properties';  // Properties page
import Agents from './pages/Agents';  // Agents page
import MapComponent from './components/MapComponent'; // Map component
import Register from './pages/Register'; // Register page
import Location from './components/Location'; // Location component
import ContactForm from './components/ContactForm'; // ContactForm component
import AboutUs from './pages/AboutUs';  // AboutUs page
import AdminDashboard from './components/AdminDashboard'; // Admin Dashboard component
import PropertyList from './components/PropertyList'; // PropertyList component
import AgentList from './components/AgentList'; // AgentList component
import UserActivity from './components/UserActivity'; // UserActivity component
import Reports from './components/Reports'; // Reports component
import AgentProfile from './pages/AgentProfile'; // AgentProfile page
import Footer from './components/Footer'; // Footer component

const App = () => {
  return (
    <div className="font-poppins bg-[#f9f9f9]">
      {/* Navbar Section */}
      <Navbar />
 
      {/* Main Content Section */}
      <div className="min-h-screen bg-[#f9f9f9] py-10">
        <div className="container px-4 mx-auto">
          
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/map" element={<MapComponent />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/about" element={<AboutUs />} />
            
            
            {/* Agent Profile Route */}
            <Route path="/agent/:id" element={<AgentProfile />} />
            
            {/* Admin Dashboard Route with Nested Routes */}
            <Route path="/admin-dashboard" element={<AdminDashboard />}>
              {/* Nested Routes for Admin Dashboard */}
              <Route path="property-list" element={<PropertyList />} />
              <Route path="agent-list" element={<AgentList />} />
              <Route path="user-activity" element={<UserActivity />} />
              <Route path="reports" element={<Reports />} />
            </Route>

          
          </Routes>
{/* <div>
  <Footer />
</div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
