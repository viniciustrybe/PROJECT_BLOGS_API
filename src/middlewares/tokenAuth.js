const { authenticateToken } = require('../utils/jwt');

const authenticateTokenMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    const user = authenticateToken(token);
    
    if (!user) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.headers.user = user;
    
    next();
};

module.exports = {
    authenticateTokenMiddleware,
};