import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ propertyId }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await axios.post('/api/properties/inquiry', { ...formData, propertyId });
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-center">Contact Us</h2>
      <p className="mb-6 text-center text-gray-600">
        Interested in this property? Send us your details and message.
      </p>

      {success && (
        <div className="p-3 mb-4 text-green-800 bg-green-100 rounded-md">
          Inquiry sent successfully!
        </div>
      )}

      {error && (
        <div className="p-3 mb-4 text-red-800 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
