const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure the correct path
require('dotenv').config(); // Load environment variables from .env file

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
    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    console.log('Step 1: Received login request for email:', email);

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Step 2: User not found for email:', email);
      return res.status(401).json({ message: 'Invalid credentials. Please check your email or password.' });
    }

    console.log('Step 2: User found:', user.email);

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Step 3: Password validation failed for email:', email);
      return res.status(401).json({ message: 'Invalid credentials. Please check your email or password.' });
    }

    console.log('Step 3: Password validated successfully for email:', email);

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    console.log('Step 4: JWT token generated for user:', user.email);

    // Send success response
    return res.status(200).json({ 
      message: 'Login successful', 
      token 
    });
  } catch (error) {
    console.error('Login error:', error.message);
    return res.status(500).json({ 
      message: 'Server error during login', 
      error: error.message // Provide detailed error for development
    });
  }
});



module.exports = router;