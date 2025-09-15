const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const authenticateJWT = require('./authMiddleware');
const User = require('./models/User'); 

const router = express.Router();

const secretKey = 'ma-super-cle-secrete-difficile-a-deviner';
const refreshTokenSecret = 'une-autre-super-cle-secrete-pour-le-refresh';

const revokedRefreshTokens = new Set();

// -- Note: User Registration Validation --
// Added validation rules as recommended by the course reinforcement exercises.
// This ensures that username and password meet specific criteria before creating a user.
const registrationValidationRules = [
  body('username')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long.'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long.'),
];

// All route handlers are now 'async'
router.post('/register', registrationValidationRules, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    // Check if user exists in the database
    let user = await User.findOne({ username });
    if (user) {
      return res.status(409).json({ message: 'Ce nom d\'utilisateur est déjà pris.' });
    }

    // Create a new user instance
    user = new User({
      username,
      password,
    });

    // Hash password and save user to database
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Identifiants invalides.' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Identifiants invalides.' });
    }

    // Generate tokens
    const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id, username: user.username }, refreshTokenSecret, { expiresIn: '7d' });

    res.cookie('token', accessToken, { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });

    res.json({ message: 'Connexion réussie.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// ---  User Profile Update ---
// Added a protected endpoint to allow authenticated users to update their password.
const updatePasswordValidationRules = [
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long.'),
];

router.post('/update-password', authenticateJWT, updatePasswordValidationRules, async (req, res) => {
    // 1. First, check for validation errors on the new password
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // 2. The authenticateJWT middleware has already run and attached the user to req.user
    const userId = req.user.id;
    const { password: newPassword } = req.body;

    try {
        // 3. Find the user in our "database"
        const userToUpdate = await User.findById(userId);
        if (!userToUpdate) {
            // This case is unlikely if the JWT is valid, but it's good practice
            return res.status(404).json({ message: 'User not found.' });
        }

        // 4. Hash the new password and update the user object
        const salt = await bcrypt.genSalt(10);
        userToUpdate.password = await bcrypt.hash(newPassword, salt);
        await userToUpdate.save();

        console.log('User profile updated:', userToUpdate);

        res.status(200).json({ message: 'Password updated successfully.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// -- Refresh Endpoint Enhancement --
// Now checks if the token has been revoked.
router.post('/refresh', (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not found.' });
  }

  // Check if the token is in our revocation list
  if (revokedRefreshTokens.has(refreshToken)) {
    return res.status(403).json({ message: 'Refresh token has been revoked.' });
  }

  jwt.verify(refreshToken, refreshTokenSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Refresh token verification failed.' });
    }
    const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '15m' });
    res.cookie('token', accessToken, { httpOnly: true, secure: false });
    res.json({ message: 'Token rafraîchi avec succès.' });
  });
});

// -- Logout Endpoint Enhancement --
// Now adds the refreshToken to a revocation list.
router.post('/logout', (req, res) => {
  const { refreshToken } = req.cookies;
  if (refreshToken) {
    revokedRefreshTokens.add(refreshToken);
  }
  
  console.log('Revoked tokens list:', revokedRefreshTokens);

  res.clearCookie('token');
  res.clearCookie('refreshToken');
  res.status(200).json({ message: 'Logout successful.' });
});

module.exports = router;
