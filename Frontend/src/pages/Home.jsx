import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../data/properties';
import property1 from '../images/property1.jpg';
const properties = [
  {
    id: 1,
    title: 'Luxury Apartment in Downtown',
    price: '$1,200,000',
    location: '123 Main St, Downtown, NY',
    description: 'A beautiful luxury apartment with a city view.',
    image: property1,
    bedrooms: 3,
    bathrooms: 2,
    size: '1,500 sq ft',
    amenities: ['Gym', 'Pool', 'Garage'],
    rating: 4.5,
    tags: ['Luxury', 'Hot Deal'],
  },
  {
    id: 2,
    title: 'Spacious Villa with Garden',
    price: '$850,000',
    location: '456 Park Ave, Beverly Hills, CA',
    description: 'A spacious villa with a beautiful garden and pool.',
    image: '/src/images/property2.jpg',
    bedrooms: 4,
    bathrooms: 3,
    size: '3,000 sq ft',
    amenities: ['Private Pool', 'Garden', 'Parking'],
    rating: 4.7,
    tags: ['Luxury', 'Family Home'],
  },
  {
    id: 3,
    title: 'Modern Condo with Ocean View',
    price: '$950,000',
    location: '789 Beach Blvd, Malibu, CA',
    description: 'A modern condo with a breathtaking ocean view.',
    image: '/src/images/property3.jpg',
    bedrooms: 2,
    bathrooms: 2,
    size: '1,200 sq ft',
    amenities: ['Ocean View', 'Balcony', 'Gym'],
    rating: 4.2,
    tags: ['Oceanfront', 'Luxury'],
  },
  {
    id: 4,
    title: 'Cozy Cottage in the Woods',
    price: '$450,000',
    location: '101 Forest Rd, Asheville, NC',
    description: 'A cozy cottage surrounded by nature, perfect for relaxation.',
    image: '/src/images/property4.jpg',
    bedrooms: 2,
    bathrooms: 1,
    size: '900 sq ft',
    amenities: ['Fireplace', 'Patio'],
    rating: 4.0,
    tags: ['Nature Retreat', 'Affordable'],
  },
  {
    id: 5,
    title: 'Contemporary Loft in City Center',
    price: '$1,000,000',
    location: '202 City Square, San Francisco, CA',
    description: 'A contemporary loft with an open floor plan in the heart of the city.',
    image: '/src/images/property5.jpg',
    bedrooms: 3,
    bathrooms: 2,
    size: '1,800 sq ft',
    amenities: ['Gym', 'Rooftop Access'],
    rating: 4.6,
    tags: ['Urban', 'Luxury'],
  },
  {
    id: 6,
    title: 'Charming Farmhouse with Acreage',
    price: '$600,000',
    location: '303 Country Rd, Dallas, TX',
    description: 'A charming farmhouse with large acreage, ideal for farming.',
    image: '/src/images/property6.jpg',
    bedrooms: 4,
    bathrooms: 2,
    size: '2,500 sq ft',
    amenities: ['Barn', 'Outdoor Kitchen'],
    rating: 4.3,
    tags: ['Rural', 'Spacious'],
  },
  {
    id: 7,
    title: 'Penthouse with City Skyline View',
    price: '$2,500,000',
    location: '500 Skyview Ave, New York, NY',
    description: 'A luxurious penthouse offering panoramic views of the city skyline.',
    image: '/src/images/property7.jpg',
    bedrooms: 4,
    bathrooms: 4,
    size: '3,500 sq ft',
    amenities: ['Private Elevator', 'Sky Garden', 'Concierge Service'],
    rating: 4.9,
    tags: ['Luxury', 'Skyline View'],
  },
  {
    id: 8,
    title: 'Suburban Family Home with Pool',
    price: '$750,000',
    location: '120 Oakwood Dr, Austin, TX',
    description: 'A spacious family home in a suburban area with a large backyard and pool.',
    image: '/src/images/property8.jpg',
    bedrooms: 4,
    bathrooms: 3,
    size: '2,800 sq ft',
    amenities: ['Private Pool', 'Large Yard', 'Garage'],
    rating: 4.4,
    tags: ['Family Home', 'Suburban'],
  },
  {
    id: 9,
    title: 'Historical Mansion with Estate Grounds',
    price: '$5,000,000',
    location: '999 Heritage Blvd, Charleston, SC',
    description: 'A grand historical mansion set on expansive estate grounds, perfect for hosting events.',
    image: '/src/images/property9.jpg',
    bedrooms: 6,
    bathrooms: 5,
    size: '7,000 sq ft',
    amenities: ['Grand Ballroom', 'Wine Cellar', 'Tennis Court'],
    rating: 4.8,
    tags: ['Historical', 'Luxury'],
  },
  {
    id: 10,
    title: 'Lakefront Cabin Retreat',
    price: '$400,000',
    location: '45 Lakeview Rd, Lake Tahoe, CA',
    description: 'A cozy cabin on the lakefront with serene views and a private dock.',
    image: '/src/images/property10.jpg',
    bedrooms: 2,
    bathrooms: 1,
    size: '1,000 sq ft',
    amenities: ['Private Dock', 'Fire Pit', 'Outdoor Activities'],
    rating: 4.1,
    tags: ['Lakefront', 'Retreat'],
  },
  {
    id: 11,
    title: 'Urban Apartment with Rooftop Terrace',
    price: '$950,000',
    location: '225 Downtown St, Chicago, IL',
    description: 'An urban apartment with modern features and access to a private rooftop terrace.',
    image: '/src/images/property11.jpg',
    bedrooms: 3,
    bathrooms: 2,
    size: '1,600 sq ft',
    amenities: ['Rooftop Terrace', 'Gym', '24/7 Security'],
    rating: 4.6,
    tags: ['Urban', 'Luxury'],
  },
  {
    id: 12,
    title: 'Mountain Lodge with Ski-in/Ski-out Access',
    price: '$1,800,000',
    location: '99 Summit Rd, Aspen, CO',
    description: 'A stunning mountain lodge with ski-in/ski-out access, ideal for winter sports enthusiasts.',
    image: '/src/images/property12.jpg',
    bedrooms: 5,
    bathrooms: 4,
    size: '4,000 sq ft',
    amenities: ['Ski-in/Ski-out', 'Hot Tub', 'Game Room'],
    rating: 4.7,
    tags: ['Mountain Retreat', 'Luxury'],
  },

  // More properties here...
];

const Home = () => {
  const navigate = useNavigate();
  const [sort, setSort] = useState('');

  const sortedProperties = [...properties].sort((a, b) => {
    if (sort === 'price') return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
    if (sort === 'size') return parseInt(a.size.replace(/\D/g, '')) - parseInt(b.size.replace(/\D/g, ''));
    if (sort === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="container py-8 mx-auto">
      {/* Hero Section */}
      <section className="p-8 mb-12 text-center transition-all duration-500 rounded-lg shadow-2xl hover:shadow-3xl">
  <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-wide animate__animated animate__fadeIn animate__delay-1s">
    Welcome to Dream Properties 🏡✨
  </h1>
  <p className="text-lg mb-6 md:text-xl max-w-3xl mx-auto text-gray-800 animate__animated animate__fadeIn animate__delay-1.5s">
    Discover your dream home or the perfect investment property. With our curated listings,
    you can find luxurious apartments, cozy cottages, spacious villas, and more.
  </p>
  <p className="max-w-3xl mx-auto mb-8 text-lg text-[#0a3d62] md:text-xl animate__animated animate__fadeIn animate__delay-2s">
    Our platform is designed to help you explore the best real estate projects that fit your
    lifestyle and budget. Whether you're looking for urban sophistication, countryside charm,
    or oceanfront tranquility, we have something for everyone.
  </p>
  <div className="relative w-full max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2.5s">
    <img
      src="/src/images/banner.JPG"
      alt="Real Estate Banner"     
      className="w-full h-auto transition-all duration-500 transform rounded-lg shadow-2xl hover:scale-110 hover:opacity-80"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black rounded-lg opacity-30"></div>
    <div className="absolute z-10 text-lg font-semibold text-green-600 bottom-4 left-4 animate__animated animate__fadeIn animate__delay-3s">
      Find Your Perfect Home Today 🏠
    </div>
  </div>

  <div className="flex justify-center space-x-10 mt-12 animate__animated animate__fadeIn animate__delay-3.5s">
    <div className="flex flex-col items-center text-gray-800">
      <i className="fas fa-home text-5xl mb-2 text-[#FFD700]"></i>
      <p className="text-xl">Residential Properties</p>
    </div>
    <div className="flex flex-col items-center text-gray-800">
      <i className="fas fa-key text-5xl mb-2 text-[#FFD700]"></i>
      <p className="text-xl">Secure & Trusted</p>
    </div>
    <div className="flex flex-col items-center text-gray-800">
      <i className="fas fa-building text-5xl mb-2 text-[#FFD700]"></i>
      <p className="text-xl">Commercial Spaces</p>
    </div>
  </div>

  <div className="mt-12 text-lg text-gray-800 animate__animated animate__fadeIn animate__delay-4s">
    <p>Explore properties across Chennai and beyond, with a seamless browsing experience. 🌟</p>
  </div>
</section>




            {/* Real Estate in Chennai Section */}
            <section className="mb-12 animate__animated animate__fadeInUp animate__delay-1s">
        <h2 className="text-4xl font-bold text-[#0a3d62] mb-6 flex items-center justify-center">
          <i className="fas fa-city text-4xl text-[#FFD700] mr-3"></i>
          Real Estate in Chennai
        </h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          Chennai properties is one of the best property websites in Chennai, helping connect buyers and sellers of properties in the city. Real estate in Chennai has seen constant growth, driven by the booming IT sector and expanding infrastructure. With prices growing steadily, it’s the perfect time to explore properties for sale or rent in this vibrant city.
        </p>
        <div className="relative w-full max-w-4xl mx-auto mt-6">
         
         
        </div>
      </section>

      {/* Tips to Buy Property in Chennai Section */}
      <section className="mb-12 animate__animated animate__fadeInUp animate__delay-2s">
        <h2 className="text-4xl font-bold text-[#0a3d62] mb-6 flex items-center justify-center">
          <i className="fas fa-lightbulb text-4xl text-[#FFD700] mr-3"></i>
          Tips to Buy Property in Chennai
        </h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          Choosing a property is a big decision. Here are some tips to guide you:
        </p>
        <ul className="max-w-4xl pl-6 mx-auto mt-6 text-lg leading-relaxed text-gray-800 list-disc">
          <li className="flex items-center mb-4">
            <i className="fas fa-map-marker-alt text-[#0a3d62] mr-3"></i>
            Research the perfect location – proximity to essential services like grocery stores, schools, and workplaces.
          </li>
          <li className="flex items-center mb-4">
            <i className="fas fa-road text-[#0a3d62] mr-3"></i>
            Consider the area’s infrastructure – check connectivity, road conditions, and amenities.
          </li>
          <li className="flex items-center mb-4">
            <i className="fas fa-building text-[#0a3d62] mr-3"></i>
            Look at potential government projects that could increase the value of the area.
          </li>
          <li className="flex items-center mb-4">
            <i className="fas fa-laptop-house text-[#0a3d62] mr-3"></i>
            Visit online portals to explore listings and research developers before making a decision.
          </li>
        </ul>
      </section>


      {/* Sort Options */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-[#0a3d62]">Explore Properties</h2>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="size">Size</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProperties.map((property) => (
          <div
            key={property.id}
            className="flex flex-col overflow-hidden transition-all duration-300 border rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            <img
              src={property.image}
              alt={property.title}
              className="object-cover w-full h-48"
            />
            <div className="flex flex-col justify-between flex-grow p-4">
              <div>
                <h3 className="text-2xl font-semibold text-[#0a3d62]">{property.title}</h3>
                <p className="text-xl text-[#27ae60] mt-2">{property.price}</p>
                <p className="text-md text-[#555] mt-2">{property.location}</p>
                <p className="text-sm text-[#777] mt-2">
                  {property.bedrooms} Beds • {property.bathrooms} Baths • {property.size}
                </p>
                <ul className="flex gap-2 mt-2">
                  {property.tags.map((tag, index) => (
                    <li
                      key={index}
                      className="px-2 py-1 text-xs font-semibold text-white bg-[#27ae60] rounded-full"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-yellow-500">
                  {'★'.repeat(Math.floor(property.rating)) +
                    '☆'.repeat(5 - Math.floor(property.rating))}
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  className="bg-[#0a3d62] text-white py-2 px-4 rounded-full hover:bg-[#1a4d6c] transition-all w-full"
                  onClick={() => navigate(`/property/${property.id}`)}
                >
                  View Details
                </button>
                <button
                  className="bg-[#27ae60] text-white py-2 px-4 rounded-full hover:bg-[#1a854d] transition-all w-full"
                  onClick={() => alert('Scheduled a visit!')}
                >
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <section className="my-12">
  <h2 className="text-4xl font-extrabold text-center text-[#0a3d62] mb-12">
    What Our Clients Say
  </h2>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
    {/* Testimonial 1 */}
    <div className="relative p-8 transition-all duration-300 transform bg-white border rounded-lg shadow-lg hover:shadow-2xl hover:scale-105">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#27ae60] rounded-full flex items-center justify-center">
        <i className="text-2xl text-white fas fa-user"></i>
      </div>
      <p className="mt-8 text-lg text-gray-700">
        "Dream Properties made my home search easy and stress-free. I found the perfect apartment in Chennai in no time!"
      </p>
      <p className="text-md text-[#27ae60] mt-4 font-semibold">- Kaviyarasan K.</p>
    </div>

    {/* Testimonial 2 */}
    <div className="relative p-8 transition-all duration-300 transform bg-white border rounded-lg shadow-lg hover:shadow-2xl hover:scale-105">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#27ae60] rounded-full flex items-center justify-center">
        <i className="text-2xl text-white fas fa-user"></i>
      </div>
      <p className="mt-8 text-lg text-gray-700">
        "The website has a fantastic range of properties, and I found exactly what I was looking for. Highly recommend!"
      </p>
      <p className="text-md text-[#27ae60] mt-4 font-semibold">- Arun M.</p>
    </div>

    {/* Testimonial 3 */}
    <div className="relative p-8 transition-all duration-300 transform bg-white border rounded-lg shadow-lg hover:shadow-2xl hover:scale-105">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#27ae60] rounded-full flex items-center justify-center">
        <i className="text-2xl text-white fas fa-user"></i>
      </div>
      <p className="mt-8 text-lg text-gray-700">
        "Excellent platform to buy property in Chennai. Their customer service is top-notch, and they helped me every step of the way."
      </p>
      <p className="text-md text-[#27ae60] mt-4 font-semibold">- Stalin S.</p>
    </div>
  </div>
</section>
<section className="py-12 my-12 text-center bg-gray-50">
  <h2 className="text-4xl font-bold text-[#0a3d62] mb-8">Why Choose Us?</h2>
  <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-4">
    <div className="p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105">
      <div className="text-[#27ae60] text-5xl mb-4">
        <i className="fas fa-check-circle"></i>
      </div>
      <h3 className="text-2xl font-semibold text-[#0a3d62] mb-3">Verified Listings</h3>
      <p className="text-gray-700">
        Explore 100% verified properties with accurate details, ensuring complete transparency.
      </p>
    </div>
    <div className="p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105">
      <div className="text-[#27ae60] text-5xl mb-4">
        <i className="fas fa-user-shield"></i>
      </div>
      <h3 className="text-2xl font-semibold text-[#0a3d62] mb-3">Trusted Platform</h3>
      <p className="text-gray-700">
        Trusted by thousands of buyers and sellers, our platform guarantees reliability.
      </p>
    </div>
    <div className="p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105">
      <div className="text-[#27ae60] text-5xl mb-4">
        <i className="fas fa-handshake"></i>
      </div>
      <h3 className="text-2xl font-semibold text-[#0a3d62] mb-3">Expert Support</h3>
      <p className="text-gray-700">
        Get personalized assistance from our real estate experts at every step.
      </p>
    </div>
    <div className="p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105">
      <div className="text-[#27ae60] text-5xl mb-4">
        <i className="fas fa-thumbs-up"></i>
      </div>
      <h3 className="text-2xl font-semibold text-[#0a3d62] mb-3">Customer Satisfaction</h3>
      <p className="text-gray-700">
        Your happiness is our priority. We strive to meet all your property needs seamlessly.
      </p>
    </div>
  </div>
</section>



<section className="my-12 bg-gradient-to-r from-[#1e3d58] to-[#27ae60] text-white py-12 px-6 rounded-lg">
  <h2 className="mb-6 text-4xl font-bold text-center">Ready to Find Your Dream Home?</h2>
  <p className="mb-8 text-lg text-center">
    Join thousands of happy customers who found their perfect property with us. Sign up today to get personalized recommendations.
  </p>
  <div className="flex justify-center">
    <button className="bg-white text-[#0a3d62] py-3 px-6 font-bold rounded hover:bg-gray-100 transition-all mx-2">
      Sign Up Now
    </button>
    <button className="bg-transparent border-2 border-white py-3 px-6 font-bold rounded hover:bg-white hover:text-[#0a3d62] transition-all mx-2">
      Contact Us
    </button>
  </div>
</section>

<footer className="py-6 text-black ">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <p className="text-sm">
      © {new Date().getFullYear()} Dream Properties. All rights reserved.
    </p>
    <div className="flex space-x-4">
      <a href="#" className="hover:text-[#0a3d62]">Privacy Policy</a>
      <a href="#" className="hover:text-[#0a3d62]">Terms of Use</a>
      <a href="#" className="hover:text-[#0a3d62]">Contact Us</a>
    </div>
  </div>
</footer>

</div>

  );
};

export default Home;
