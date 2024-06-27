const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    // Get the token from the Authorization header
    const authHeader = req.header('Authorization');
    
    // Check if the Authorization header is present
    if (!authHeader) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Replace 'Bearer ' prefix from the token
    const token = authHeader.replace('Bearer ', '');

    try {
        // Verify the token
        const decoded = jwt.verify(token, secretKey)
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

const authorize = (roles = []) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
};

module.exports = { authenticate, authorize };
