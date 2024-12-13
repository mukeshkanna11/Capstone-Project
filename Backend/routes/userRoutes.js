const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure the correct path
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid credentials');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token if credentials are valid
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    console.log('Login successful');
    res.status(200).json({ token }); // Send token as response
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;