const express = require('express');
const router = express.Router();

const { getAllUsers, addUser} = require('../controllers/userControllers');

// 1. Get all the genre
router.get('/', getAllUsers);
// 3. Add genre 
router.post('/', addUser);

module.exports = router;