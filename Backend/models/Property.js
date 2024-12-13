const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  agent: { type: String, required: true },
  features: {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    size: { type: Number, required: true }
  }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
