const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    // Check for the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];

    // Debugging: Log the token for validation (remove in production)
    console.log('Token Received:', token);

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data from the token to the request
    req.user = decoded;

    // Proceed to the next middleware or route
    next();
  } catch (err) {
    // Handle specific JWT errors
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired. Please log in again.' });
    }

    if (err.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Invalid token. Ensure you are logged in.' });
    }

    // General server error
    console.error('Authentication Error:', err);
    return res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

module.exports = authMiddleware;
