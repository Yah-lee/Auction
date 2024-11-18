const authMiddleware = (req, res, next) => {
  const userId = req.headers["user_id"];

  if (!userId) {
    return res.status(400).json({ error: "Missing user_id header" });
  }
  try {
    var decoded = jwt.verify(userId, "Secret@");
    req.user_id = decoded.user_id; 
  } catch (err) {
    return res.status(400).json({ error: "Invalid or expired token" });
  }
  next();
};
module.exports = authMiddleware;
