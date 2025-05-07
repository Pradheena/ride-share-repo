const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.contoller'); // Fixed typo in filename
const { body } = require("express-validator");
const authMiddleware = require('../middlewares/auth.middleware');
const getUserProfile = require('../Controllers/user.contoller')

// Registration Route
router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters')
], userController.registerUser);

// Login Route
router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').exists().withMessage('Password is required') // Changed from length check
], userController.loginUser);

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);
router.get('/logout',authMiddleware.authUser,userController.logoutUser)
module.exports = router;