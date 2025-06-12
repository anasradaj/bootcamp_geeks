const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register = async (req, res, next) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    if (!email || !username || !first_name || !last_name || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const existing = await User.getUserByUsername(username);
    if (existing) return res.status(409).json({ error: 'Username already exists' });
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.createUser({ email, username, first_name, last_name }, hashed);
    res.status(201).json({ id: user.id, username: user.username });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Username and password required' });
    const hash = await User.getPasswordHash(username);
    if (!hash) return res.status(401).json({ error: 'Invalid credentials' });
    const valid = await bcrypt.compare(password, hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ message: 'Login successful', username });
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.getUserById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { email, username, first_name, last_name } = req.body;
    const updated = await User.updateUser(id, { email, username, first_name, last_name });
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};
