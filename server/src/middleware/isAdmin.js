const formatResponse = require("../utils/formatResponse");

function isAdmin(req, res, next) {
  const user = res.locals.user;
console.log(user);

  if (!user || !user.isAdmin) {
    
    return res.status(403).json(
      formatResponse(
        403,
        "Access denied",
        null,
        "Only admins can add watch card"
      )
    );
  }

  next();
}

module.exports = isAdmin;