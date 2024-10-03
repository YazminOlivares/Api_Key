const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.post('/login', authController.login);
router.put('/create', authController.createUser);
router.put('/createAdmin', authController.createUserAdmin);

module.exports = router;