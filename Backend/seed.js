require('dotenv').config();
const mongoose = require('mongoose');
const Property = require('./models/Property'); // Adjust the path if necessary

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch(err => console.error(err));

const seedProperties = [
  {
    title: 'Luxury Villa with Sea View',
    description: 'A stunning villa located by the seaside with modern amenities and breathtaking views.',
    price: 1200000,
    location: 'Miami Beach, FL',
    agent: 'John Doe',
    image: 'https://example.com/images/luxury-villa.jpg', // Replace with actual URLs
    bedrooms: 5,
    bathrooms: 4,
    size: 4500,
    amenities: ['Swimming Pool', 'Gym', 'Garden', 'Garage']
  },
  {
    title: 'Modern Apartment in the City Center',
    description: 'A stylish apartment with easy access to shopping, dining, and entertainment.',
    price: 750000,
    location: 'New York, NY',
    agent: 'Jane Smith',
    image: 'https://example.com/images/modern-apartment.jpg', // Replace with actual URLs
    bedrooms: 3,
    bathrooms: 2,
    size: 1500,
    amenities: ['Elevator', 'Security', 'Parking']
  },
  {
    title: 'Cozy Cottage in the Countryside',
    description: 'A peaceful retreat in the countryside, perfect for a weekend getaway.',
    price: 300000,
    location: 'Napa Valley, CA',
    agent: 'Alice Johnson',
    image: 'https://example.com/images/cozy-cottage.jpg', // Replace with actual URLs
    bedrooms: 2,
    bathrooms: 1,
    size: 1200,
    amenities: ['Fireplace', 'Garden', 'Patio']
  },
  {
    title: 'Spacious Family Home',
    description: 'A perfect home for a growing family, with a large backyard and modern interiors.',
    price: 500000,
    location: 'Austin, TX',
    agent: 'Michael Brown',
    image: 'https://example.com/images/family-home.jpg', // Replace with actual URLs
    bedrooms: 4,
    bathrooms: 3,
    size: 3000,
    amenities: ['Playground', 'Garage', 'Gym']
  },
  {
    title: 'Penthouse Suite with Panoramic Views',
    description: 'A luxurious penthouse suite offering stunning cityscape views and top-notch amenities.',
    price: 2500000,
    location: 'San Francisco, CA',
    agent: 'Sarah Lee',
    image: 'https://example.com/images/penthouse-suite.jpg', // Replace with actual URLs
    bedrooms: 3,
    bathrooms: 3,
    size: 2000,
    amenities: ['Rooftop Deck', 'Concierge Service', 'Valet Parking']
  }
];

const seedDB = async () => {
  try {
    await Property.deleteMany({});
    console.log('Existing properties deleted.');
    await Property.insertMany(seedProperties);
    console.log('Database seeded with properties!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDB();
