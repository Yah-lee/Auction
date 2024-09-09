const authMiddleware = (req, res, next) => {
    const userId = req.headers['user_id']; 

    if (!userId) {
        return res.status(400).json({ error: 'You do not have permission' });
    }

    req.user_id = userId; 
    next(); 
};

module.exports = authMiddleware;
