// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Routes to handle user operations
router.get('/users', userController.getUsers);             // Get all users
router.get('/users/:id', userController.getUserById);     // Get user by ID
router.post('/users', userController.createUser);         // Create a new user
router.put('/users/:id', userController.updateUser);      // Update user
router.delete('/users/:id', userController.deleteUser);  // Delete user

module.exports = router;
