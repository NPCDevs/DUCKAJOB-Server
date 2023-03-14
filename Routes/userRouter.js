const express = require('express');
const userRouter = express.Router();
const usersController = require('../Controllers/usersController');

// auth => logged in || register
userRouter.post('/auth', usersController.authUser);

// register => logged in
userRouter.post('/register', usersController.register);

module.exports = userRouter;
