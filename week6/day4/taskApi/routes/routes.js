const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const {readData, writeData} = require('../utils/fileHandler');
const user = require('../../../day3/daily_challenges/RegistrationLogin/server/models/user');

router.post('/register', async (req, res) => {
    console.log('REGISTER BODY:', req.body); // Debug log
    const { firstName, lastName, email, userName, password } = req.body;

    if (!firstName || !lastName || !email || !userName || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    let userData = await readData();
    const existingUser = userData.some(user => user.userName === userName || user.email === email);
    if (existingUser) { 
        return res.status(409).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        firstName,
        lastName,
        email,
        userName,
        password: hashedPassword
    };
    userData.push(newUser);
    await writeData(userData);
    res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
    const {userName, password} = req.body;
    if (!userName || !password) {
        return res.status(400).json({error: 'Username and password are required'})
    }
    const userData = await readData();
    const user = userData.find(user => user.userName === userName);

    if (!user) {
        return res.status(404).json({error: 'User not found'})
    }
    const ispasswordValid = await bcrypt.compare(password, user.password);
    if (!ispasswordValid) {
        return res.status(401).json({error: 'Invalid password'});
    }
    res.status(200).json({message: `Login successful, ${user.userName}.`})

});

// List all users (omit password)
router.get('/users', async (req, res) => {
    try {
        const userData = await readData();
        const users = userData.map(({ password, ...user }) => user);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Get user by username or email (omit password)
router.get('/users/:identifier', async (req, res) => {
    const { identifier } = req.params;
    try {
        const userData = await readData();
        const user = userData.find(u => u.userName === identifier || u.email === identifier);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const { password, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

// Update user by username or email
router.put('/users/:identifier', async (req, res) => {
    const { identifier } = req.params;
    const { firstName, lastName, email, userName, password } = req.body;
    try {
        let userData = await readData();
        const userIndex = userData.findIndex(u => u.userName === identifier || u.email === identifier);
        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Prevent duplicate username/email
        if ((userName && userName !== userData[userIndex].userName && userData.some(u => u.userName === userName)) ||
            (email && email !== userData[userIndex].email && userData.some(u => u.email === email))) {
            return res.status(409).json({ error: 'Username or email already in use' });
        }
        // Update fields
        if (firstName) userData[userIndex].firstName = firstName;
        if (lastName) userData[userIndex].lastName = lastName;
        if (email) userData[userIndex].email = email;
        if (userName) userData[userIndex].userName = userName;
        if (password) {
            userData[userIndex].password = await bcrypt.hash(password, 10);
        }
        await writeData(userData);
        const { password: pw, ...updatedUser } = userData[userIndex];
        res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

module.exports = router;