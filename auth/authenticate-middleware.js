const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const jwtSecret = process.env.JWT_SECRET || 'bluegreencyan';
  const token = req.headers.authorization;
  
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'You shall not pass!!' })
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
      res.status(401).json({ you: 'shall not pass!' });
    }
};
