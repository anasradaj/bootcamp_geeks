
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); 
const { validationResult } = require('express-validator');

// Get secrets from environment variables
const secretKey = process.env.JWT_SECRET || 'a-default-secret-key';
const refreshTokenSecret = process.env.REFRESH_SECRET || 'a-default-refresh-secret-key';

// In-memory store for revoked refresh tokens for now
const revokedRefreshTokens = new Set();

/**
 * Handles new user registration.
 */
const register = async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        let user = await User.findByEmail(email);
        if (user) {
            return res.status(409).json({ message: 'Email is already in use.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({ username, email, hashedPassword });

        // Add this check
        if (!user) {
            // If the creation returned null, it means there was a database error
            return res.status(500).json({ message: "Failed to create user due to a database error." });
        }

        res.status(201).json({ message: 'User registered successfully.' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

/**
 * Handles user login.
 */
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email in the database
        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Compare provided password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Generate tokens
        const accessToken = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '15m' });
        const refreshToken = jwt.sign({ userId: user.id }, refreshTokenSecret, { expiresIn: '7d' });

        // Set cookies
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        // Send access token to the client
        res.json({ accessToken });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// ... add other functions like logout, refresh here later

module.exports = {
    register,
    login
};