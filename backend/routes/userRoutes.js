const express = require('express');
const router = express.Router();
const { signin } = require('../Controllers/userController');

router.post('/signin', signin);

module.exports = router;
