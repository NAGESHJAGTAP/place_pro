const bcrypt = require('bcrypt');
const { createUser, findUserByEmail } = require('../models/userModel');

const signin = async (req, res) => {
  const { userName, mobileNumber, email, password } = req.body;

  if (!userName || !mobileNumber || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if user exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      userName,
      mobileNumber,
      email,
      password: hashedPassword,
      
    };

    const result = await createUser(newUser);
    if (result.insertedId) {
      res.status(201).json({ message: 'User signed up successfully' });
    } else {
      res.status(500).json({ message: 'Failed to sign up user' });
    }
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { signin };
