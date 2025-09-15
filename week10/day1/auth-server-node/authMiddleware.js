const jwt = require('jsonwebtoken');
const secretKey = 'ma-super-cle-secrete-difficile-a-deviner'; 

function authenticateJWT(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé.' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalide ou expiré.' });
    }
    req.user = user; 
    next(); 
  });
}

module.exports = authenticateJWT;