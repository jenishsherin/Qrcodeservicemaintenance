const jwt = require('jsonwebtoken');
const SECRET_KEY = 'reactappfullstack';

// Function to generate JWT
function generateJwt(user) {
  const payload = {
    userId: user.id,
    email: user.email
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '10h' });
}

function verifyJwt(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ error: 'Access denied' });
  }

  const verified = verifyJwt(token);
  if (!verified) {
    return res.status(401).send({ error: 'Invalid token' });
  }

  req.user = verified;
  next();
}

module.exports={
  generateJwt,
  verifyJwt,
  verifyToken
}