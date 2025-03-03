const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/loginModel');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found. Please register now.' });
    }

  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

   
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { login };
