const jwt = require('jsonwebtoken');
const User = require('../models/user');

function verifyToken(requiredRoles) {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return res.status(403).send('Access denied');

        jwt.verify(token, 'your_jwt_secret', (err, user) => {
            if (err) return res.status(403).send('Invalid token');

            req.user = user;
            
            // Periksa apakah peran pengguna termasuk dalam peran yang diperlukan
            if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
                return res.status(403).send('Access denied');
            }

            next();
        });
    };
}

module.exports = verifyToken;
