const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  image: { type: String },
});

module.exports = mongoose.model('Agent', agentSchema);
