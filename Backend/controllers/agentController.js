const Agent = require('../models/Agent');

exports.getAllAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.addAgent = async (req, res) => {
  try {
    const { name, email, phone, image } = req.body;

    const newAgent = new Agent({
      name,
      email,
      phone,
      image,
    });

    await newAgent.save();
    res.status(201).json(newAgent);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
