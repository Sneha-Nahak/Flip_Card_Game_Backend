const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  console.log('Received signup request:', username);

  try {
    const exists = await User.findOne({ username });
    if (exists) return res.status(400).json({ message: 'Username already exists' });

    const user = new User({ username, password });
    await user.save();

    const token = generateToken(user);
    console.log('User registered successfully:', username);
    return res.status(201).json({ token, username: user.username });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};


exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({ token, username: user.username });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
