const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get token from the authorization header (Bearer token format)
    const token = req.headers.authorization?.split(' ')[1];

    // If token is not provided, return an error
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    // Verify the token
    try {
        // Use jwt.verify() to verify the token with the secret key
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        // Add the user data to the request object for use in route handlers
        req.user = verified;
        next();
    } catch (err) {
        // Handle specific JWT errors for better feedback
        if (err.name === 'JsonWebTokenError') {
            return res.status(400).json({ message: 'Invalid token. Please provide a valid token.' });
        } else if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired. Please log in again.' });
        } else {
            return res.status(500).json({ message: 'An error occurred while verifying the token.' });
        }
    }
};

module.exports = authMiddleware;
