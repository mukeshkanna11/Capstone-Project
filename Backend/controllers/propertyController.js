const Property = require('../models/Property');

exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.addProperty = async (req, res) => {
  try {
    const { title, location, price, description, image, agent, features } = req.body;

    const newProperty = new Property({
      title,
      location,
      price,
      description,
      image,
      agent,
      features,
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
