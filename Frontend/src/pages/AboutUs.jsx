import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Dedicated to connecting people with their dream properties.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3">
          {/* Mission */}
          <div className="p-6 bg-white rounded-md shadow-md">
            <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-500 rounded-md">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To provide the best platform for property buying, selling, and
              renting while maintaining the highest level of customer
              satisfaction.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 bg-white rounded-md shadow-md">
            <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-green-500 rounded-md">
              <i className="fas fa-eye"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To revolutionize the real estate industry with innovative
              technology and unmatched customer support.
            </p>
          </div>

          {/* Values */}
          <div className="p-6 bg-white rounded-md shadow-md">
            <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-yellow-500 rounded-md">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
            <p className="mt-2 text-gray-600">
              Transparency, integrity, and excellence are at the core of
              everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
