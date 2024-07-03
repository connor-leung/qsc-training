const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const jwtSecret = process.env.JWT_SECRET; // Use the secret from .env

// Signup route
router.post('/signup', async (req, res) => {

});

// Login route
router.post('/login', async (req, res) => {
 
});

module.exports = router;
