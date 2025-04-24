const jwt = require("jsonwebtoken");

function adminOnly(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.user || !decoded.user.isAdmin) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    req.user = decoded.user; // сохраняем user в req.user
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = adminOnly;
