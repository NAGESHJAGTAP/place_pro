const express = require('express');
const router = express.Router();
const { login } = require('../Controllers/loginControllers');

router.post('/login', login);

module.exports = router;
